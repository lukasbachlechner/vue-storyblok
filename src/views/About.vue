<template>
    <div v-editable="aboutContent" class="container mt-5">
        <img :src="aboutContent.image.filename" alt="" class="about__image" />
        <h1 class="title is-2">{{ aboutContent.title }}</h1>
        <p class="about__content">{{ aboutContent.content }}</p>
    </div>
</template>

<script>
export default {
    props: {
        aboutContent: Object,
    },
};
</script>

<style>
.about__image {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    margin-bottom: 2rem;
}

.about__content {
    white-space: pre-line;
}
</style>
