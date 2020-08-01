import Vue from 'vue';
import 'bulma/css/bulma.min.css';

import App from './App.vue';
import router from './router';
import StoryblokVue from 'storyblok-vue';
import StoryblokClient from 'storyblok-js-client';

const usesBridge = Boolean(process.env.VUE_APP_STORYBLOK_BRIDGE);
const storyblokToken = process.env.VUE_APP_ACCESS_TOKEN;
const version = usesBridge ? 'draft' : 'published';

Vue.use(StoryblokVue);

if (usesBridge) {
    // if bridge is used, we need to initialise it
    window.storyblok.init();

    // this enables the editor to reload our page
    window.storyblok.on(['published', 'change'], function() {
        location.reload(true);
    });

    window.storyblok.pingEditor(function() {
        if (window.storyblok.inEditor) {
            window.storyblok.enterEditmode();
        }
    });
}

console.log(usesBridge);

Vue.config.productionTip = false;

new Vue({
    router,
    data() {
        return {
            storyapi: null,
        };
    },
    created() {
        // we initialise the storyblok-js-client in the root instance
        // to make it available in our whole app
        this.storyapi = new StoryblokClient({
            accessToken: storyblokToken,
        });
    },
    methods: {
        // here we define our "business logic"
        // these methods respectively return a Promise with all our blog posts
        getAllPosts() {
            return this.storyapi
                .get('cdn/stories', {
                    starts_with: 'posts/',
                    version,
                })
                .catch((error) => console.log(error));
        },
        // or return a Promise with a single story (e. g. a post, a page, ...)
        getStory(slug) {
            return this.storyapi
                .get('cdn/stories/' + slug, {
                    version,
                })
                .catch((error) => console.log(error));
        },
    },
    render: (h) => h(App),
}).$mount('#app');
