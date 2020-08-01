<template>
    <div v-if="!loading">
        <section
            class="hero is-primary is-large is-bold mb-6"
            v-editable="homeContent"
        >
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-1">{{ homeContent.hero_title }}</h1>
                    <span class="subtitle">{{
                        homeContent.hero_subtitle
                    }}</span>
                </div>
            </div>
        </section>
        <section class="home container">
            <h3 class="title">Latest Posts</h3>
            <ul class="columns is-multiline">
                <PostPreview
                    v-for="post in posts"
                    :key="post.id"
                    :title="post.content.title"
                    :image="post.content.image"
                    :slug="post.slug"
                    :content="post.content.content"
                />
            </ul>
        </section>
    </div>
</template>

<script>
import PostPreview from '@/components/PostPreview';

export default {
    name: 'Home',
    components: {
        PostPreview,
    },
    props: {
        posts: Array,
        homeContent: Object,
        loading: Boolean,
    },
};
</script>
