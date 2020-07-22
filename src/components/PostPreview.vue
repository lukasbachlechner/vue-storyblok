<template>
    <li class="column">
        <div class="card">
            <div class="card-image">
                <div class="image is-4by3">
                    <img :src="image.filename" />
                </div>
            </div>
            <div class="card-content">
                <h3 class="title is-5">{{ title }}</h3>
                <p>{{ excerpt }}</p>
            </div>

            <div class="card-footer">
                <router-link :to="slug" class="card-footer-item"
                    >Read more</router-link
                >
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        title: String,
        image: Object,
        slug: String,
        content: String,
        blok: Object,
    },
    computed: {
        excerpt() {
            return this.content.substring(0, 80) + '...';
        },
    },
};
</script>
