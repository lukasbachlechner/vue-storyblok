<template>
    <section class="container" v-if="!loading">
        <img :src="post.content.image.filename" alt class="post__image mb-6" />
        <h3 class="title">{{ post.content.title }}</h3>
        <p class="post__content">{{ post.content.content }}</p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            post: {},
        };
    },
    created() {
        const slug = this.$route.params.post;
        this.$root.getPost(slug).then((response) => {
            this.post = response.data.story;
            this.loading = false;
        });
    },
};
</script>

<style>
.post__image {
    width: 100%;
}
.post__content {
    white-space: pre-line;
}
</style>
