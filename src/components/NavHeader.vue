<template>
    <header
        class="border-4 border-black p-4 mb-8 bg-white retro-shadow flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 @click="goBackHome"
            class="text-2xl font-bold tracking-tighter uppercase border-b-4 border-transparent hover:border-black cursor-pointer">
            RetroTask
        </h1>

        <!-- NAVIGATION: Repetitive elements, perfect for `v-for` -->
        <nav class="flex gap-4 font-bold text-sm sm:text-base">
            <router-link to="/"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">Home</router-link>
            <router-link to="/about"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">About</router-link>
            <router-link to="/features"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">Features</router-link>
            <router-link to="/contact"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">Contact</router-link>
            <router-link to="/users"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">Users</router-link>
        </nav>
    </header>
</template>
<script>
export default {
    methods: {
        goBackHome() {
            this.$router.push('/')
        }
    }
}
</script>