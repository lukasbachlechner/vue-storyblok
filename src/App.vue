<template>
    <div id="app">
        <Header />
        <main>
            <router-view
                :posts="posts"
                :homeContent="homeContent"
                :aboutContent="aboutContent"
                :loading="loading"
            />
        </main>
        <Footer />
    </div>
</template>

<script>
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
            aboutContent: null,
            loading: true,
        };
    },
    created() {
        const allPosts = this.$root.getAllPosts().then((response) => {
            this.posts = response.data.stories;
        });

        const homeContent = this.$root.getStory('home').then((response) => {
            this.homeContent = response.data.story.content;
        });

        const aboutContent = this.$root.getStory('about').then((response) => {
            this.aboutContent = response.data.story.content;
        });

        Promise.all([allPosts, homeContent, aboutContent]).then(() => {
            this.loading = false;
        });
    },
};
</script>
