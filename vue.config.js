process.env.PREVIEW_TOKEN = 'MhMUm48rJbU143xQOg1EMwtt';
process.env.PUBLIC_TOKEN = '';

process.env.VUE_APP_ACCESS_TOKEN = process.env.STORYBLOK_BRIDGE
    ? process.env.PREVIEW_TOKEN
    : process.env.PUBLIC_TOKEN;
process.env.VUE_APP_STORYBLOK_BRIDGE = process.env.STORYBLOK_BRIDGE;

module.exports = {};
