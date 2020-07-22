<template>
    <div id="app">
        <Header />
        <main>
            <router-view
                :posts="posts"
                :homeContent="homeContent"
                :loading="loading"
            />
        </main>
        <Footer />
    </div>
</template>

<script>
window.storyblok.init({
    accessToken: process.env.VUE_APP_ACCESS_TOKEN,
});

window.storyblok.on(['published', 'change'], function() {
    location.reload(true);
});

window.storyblok.pingEditor(function() {
    if (window.storyblok.inEditor) {
        window.storyblok.enterEditmode();
    }
});

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            posts: null,
            homeContent: null,
            loading: true,
        };
    },
    created() {
        const allPosts = this.$root.getAllPosts().then((response) => {
            this.posts = response.data.stories;
        });

        const pageContent = this.$root.getPage('home').then((response) => {
            this.homeContent = response.data.story.content;
        });

        Promise.all([allPosts, pageContent]).then(() => {
            this.loading = false;
        });
    },
};
</script>
