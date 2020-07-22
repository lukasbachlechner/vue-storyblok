import Vue from 'vue';
import Buefy from 'buefy';
import 'bulma/css/bulma.min.css';

import App from './App.vue';
import router from './router';
import StoryblokVue from 'storyblok-vue';
import StoryblokClient from 'storyblok-js-client';

const usesBridge = process.env.VUE_APP_STORYBLOK_BRIDGE;
const storyblokToken = process.env.VUE_APP_ACCESS_TOKEN;
const version = usesBridge ? 'draft' : 'published';

Vue.use(StoryblokVue);
Vue.use(Buefy);

if (usesBridge) {
    window.storyblok.init();

    window.storyblok.on(['published', 'change'], function() {
        location.reload(true);
    });

    window.storyblok.pingEditor(function() {
        if (window.storyblok.inEditor) {
            window.storyblok.enterEditmode();
        }
    });
}

Vue.config.productionTip = false;

new Vue({
    router,
    data() {
        return {
            storyapi: null,
        };
    },
    created() {
        this.storyapi = new StoryblokClient({
            accessToken: storyblokToken,
        });
    },
    methods: {
        getAllPosts() {
            return this.storyapi
                .get('cdn/stories', {
                    starts_with: 'posts/',
                    version,
                })
                .catch((error) => console.log(error));
        },
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
