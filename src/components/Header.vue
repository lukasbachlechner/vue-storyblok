<template>
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <div class="navbar-brand">
                    <router-link
                        to="/"
                        class="navbar-item title is-4 has-text-primary"
                    >
                        MyBlog
                    </router-link>
                </div>
                <div class="navbar-end">
                    <router-link class="navbar-item has-text-dark" to="/"
                        >Home</router-link
                    >
                    <router-link class="navbar-item has-text-dark" to="/about"
                        >About</router-link
                    >
                </div>
            </nav>
        </div>
    </header>
</template>
