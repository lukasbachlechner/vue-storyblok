import Vue from 'vue';
import Buefy from 'buefy';
import 'bulma/css/bulma.min.css';

import App from './App.vue';
import router from './router';
import StoryblokVue from 'storyblok-vue';
import StoryblokClient from 'storyblok-js-client';

const storyblokToken = process.env.VUE_APP_ACCESS_TOKEN;
const version = process.env.VUE_APP_STORYBLOK_BRIDGE ? 'draft' : 'published';

Vue.use(StoryblokVue);
Vue.use(Buefy);

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
        getPost(slug) {
            return this.storyapi
                .get('cdn/stories/posts/' + slug, {
                    version,
                })
                .catch((error) => console.log(error));
        },
        getPage(slug) {
            return this.storyapi
                .get('cdn/stories/' + slug, {
                    version,
                })
                .catch((error) => console.log(error));
        },
    },
    render: (h) => h(App),
}).$mount('#app');
