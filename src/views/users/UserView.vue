<template>
    <!-- <p>User ID: {{ $route.params.id }}</p> -->

    <main class="flex-grow flex flex-col items-center w-full max-w-4xl mx-auto">
        <div class="w-full flex justify-start mb-6">
            <router-link to="/users"
                class="border-4 border-black bg-white hover:bg-gray-100 px-4 py-2 font-bold uppercase retro-shadow-sm transition-all active:translate-y-1 active:shadow-none">
                ← Back to Users
            </router-link>
        </div>

        <!-- USER PROFILE CARD (Dynamic route target: /users/:id) -->
        <section class="w-full border-4 border-black bg-white retro-shadow flex flex-col md:flex-row relative">
            <!-- ID Card "Hole" design flair -->
            <div
                class="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 border-4 border-black bg-gray-200 rounded-full md:hidden">
            </div>

            <!-- Left side / Avatar -->
            <div
                class="md:w-1/3 bg-pink-300 border-b-4 md:border-b-0 md:border-r-4 border-black p-8 flex flex-col items-center justify-center text-center">
                <div class="w-32 h-32 bg-white border-4 border-black retro-shadow-sm rounded-full flex items-center justify-center font-bold text-6xl mb-4 mt-6 md:mt-0"
                    id="user-avatar">
                    A
                </div>
                <div
                    class="bg-black text-white px-3 py-1 font-bold text-sm uppercase retro-shadow-sm transform -rotate-2">
                    Pro Member
                </div>
            </div>

            <!-- Right side / Details -->
            <div class="md:w-2/3 p-8 flex flex-col justify-center">
                <div class="mb-6">
                    <h2 class="text-4xl font-bold uppercase mb-1" id="user-name">
                        Alice
                    </h2>
                    <p class="text-gray-500 font-bold font-mono text-lg" id="user-handle">
                        @alice_retro
                    </p>
                </div>

                <div class="border-2 border-black p-4 mb-6 bg-yellow-50 retro-shadow-sm">
                    <h3 class="font-bold uppercase text-sm border-b-2 border-black mb-2 inline-block">
                        Biography
                    </h3>
                    <p class="text-sm" id="user-bio">
                        Loves border-radius: 0. Hates soft gradients. Will fight you if
                        you use box-shadow with blur.
                    </p>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div class="border-2 border-black p-3 text-center bg-blue-100">
                        <p class="text-3xl font-bold">142</p>
                        <p class="text-xs font-bold uppercase">Tasks Done</p>
                    </div>
                    <div class="border-2 border-black p-3 text-center bg-green-100">
                        <p class="text-3xl font-bold">12</p>
                        <p class="text-xs font-bold uppercase">Streak</p>
                    </div>
                    <div class="border-2 border-black p-3 text-center bg-orange-100 col-span-2 md:col-span-1">
                        <p class="text-3xl font-bold">0</p>
                        <p class="text-xs font-bold uppercase">Soft Edges</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    created() {
        console.log(this.$route.params.id)
    }
}
</script>