const PREVIEW_TOKEN = 'MhMUm48rJbU143xQOg1EMwtt';
const PUBLIC_TOKEN = '';

process.env.VUE_APP_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE
    ? PREVIEW_TOKEN
    : PUBLIC_TOKEN;
process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE;

module.exports = {};
