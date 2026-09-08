import { writeFile } from 'node:fs/promises';

const outputPath = new URL('../public/youtube.json', import.meta.url);
const channelUrl = process.env.YOUTUBE_CHANNEL_URL || 'https://youtube.com/@pannu_core';

const channelPage = await fetch(`${channelUrl.replace(/\/$/, '')}/about?hl=en`);
if (!channelPage.ok) {
  throw new Error(`YouTube channel request failed with ${channelPage.status}.`);
}
const channelHtml = await channelPage.text();
const channelId = channelHtml.match(/"channelId":"(UC[^"]+)"/)?.[1];

if (!channelId) {
  throw new Error('Unable to find the channel ID on the YouTube channel page.');
}

const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`);
if (!response.ok) {
  throw new Error(`YouTube RSS request failed with ${response.status}.`);
}

const xml = await response.text();
const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, 3);
const videos = entries.map(([, entry]) => {
  const videoId = readTag(entry, 'yt:videoId');
  const thumbnail = entry.match(/<media:thumbnail[^>]*url="([^"]+)"/i)?.[1];

  if (!videoId) {
    throw new Error('A YouTube RSS entry is missing its video ID.');
  }

  return {
    id: videoId,
    title: decodeXml(readTag(entry, 'title')),
    category: 'LATEST UPLOAD',
    duration: '--:--',
    thumbnailUrl: thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
    description: decodeXml(readTag(entry, 'media:description')) || 'Latest upload from the official YouTube channel.'
  };
});

await writeFile(outputPath, `${JSON.stringify(videos, null, 2)}\n`, 'utf8');
console.log(`Updated ${videos.length} YouTube videos.`);

function readTag(value, tagName) {
  const match = value.match(new RegExp(`<${tagName}>([\\s\\S]*?)</${tagName}>`, 'i'));
  return match?.[1]?.trim() || '';
}

function decodeXml(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}
