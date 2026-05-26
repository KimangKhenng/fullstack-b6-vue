<template>
    <!-- <router-link class="bg-white py-2 px-4 hover:bg-pink-300" to="/users/1">TO user 1</router-link>
    <router-link class="bg-white py-2 px-4 hover:bg-pink-300" to="/users/2">TO user 2</router-link>
    <router-link class="bg-white py-2 px-4 hover:bg-pink-300" to="/users/3">TO user 3</router-link>
    <router-link class="bg-white py-2 px-4 hover:bg-pink-300" to="/users/4">TO user 4</router-link> -->

    <main class="flex-grow flex flex-col items-center w-full max-w-5xl mx-auto space-y-12">
        <!-- USERS INDEX HERO -->
        <section class="text-center w-full">
            <div class="border-4 border-black p-8 bg-blue-300 retro-shadow mb-12">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 uppercase leading-tight">
                    The
                    <span
                        class="bg-yellow-300 text-black px-2 py-1 border-2 border-black inline-block rotate-2 retro-shadow-sm">Community</span>
                </h2>
                <p class="text-lg font-bold">
                    See who else is doing things the
                    <span class="underline decoration-4 decoration-white">hard way</span>.
                </p>
            </div>

            <!-- USERS GRID: Perfect candidate for v-for! -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
                <user-card v-for="(item, index) in users" :key="index" :user="item" />
            </div>
        </section>
    </main>
</template>
<script>
import UserCard from '@/components/UserCard.vue';
export default {
    components: {
        UserCard
    },
    data() {
        return {
            users: [
                {
                    id: '1',
                    username: 'alice_retro',
                    name: 'Alice',
                    bio: 'Loves border-radius: 0. Hates soft gradients.'
                },
                {
                    id: '2',
                    username: 'bob_brutal',
                    name: 'Bob',
                    bio: 'Completes 50 tasks a day just to click the checkboxes.'
                },
                {
                    id: '3',
                    username: 'charlie_css',
                    name: 'Charlie',
                    bio: 'Still using float: left for layouts.'
                },
                {
                    id: '4',
                    username: 'diana_dev',
                    name: 'Diana',
                    bio: 'Codes everything in Notepad. Refuses to use dev tools.'
                },
                {
                    id: '5',
                    username: 'edward_elm',
                    name: 'Edward',
                    bio: 'Writes entire JavaScript apps in jQuery.'
                },
                {
                    id: '6',
                    username: 'fiona_flash',
                    name: 'Fiona',
                    bio: 'Loves Flash websites. Has a GeoCities page.'
                }
            ]
        }
    }
}
</script>