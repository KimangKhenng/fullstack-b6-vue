<template>
    <!-- <p>User ID: {{ $route.params.id }}</p> -->

    <main class="flex-grow flex flex-col items-center w-full max-w-4xl mx-auto">
        <div class="w-full flex justify-start mb-6">
            <a href="users.html"
                class="border-4 border-black bg-white hover:bg-gray-100 px-4 py-2 font-bold uppercase retro-shadow-sm transition-all active:translate-y-1 active:shadow-none">
                ← Back to Users
            </a>
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

        <div class="w-full mt-6 border-4 border-black bg-white retro-shadow">
            <div class="flex border-b-4 border-black overflow-x-auto">
                <router-link :to="`/users/${$route.params.id}`"
                    class="tab-link px-6 py-3 font-bold uppercase text-sm border-r-4 border-black hover:bg-yellow-100 transition-colors whitespace-nowrap">
                    Posts
                </router-link>
                <router-link :to="`/users/${$route.params.id}/followers`"
                    class="tab-link px-6 py-3 font-bold uppercase text-sm border-r-4 border-black hover:bg-yellow-100 transition-colors whitespace-nowrap">
                    Followers
                </router-link>
                <router-link :to="`/users/${$route.params.id}/followings`"
                    class="tab-link px-6 py-3 font-bold uppercase text-sm hover:bg-yellow-100 transition-colors whitespace-nowrap">
                    Following
                </router-link>
            </div>

            <div id="child-route-view" class="p-6 min-h-48">
                <router-view />
            </div>
            <!-- end #child-route-view -->
        </div>

        <!-- STUDENT CALLOUT BOX -->
        <div class="w-full mt-6 border-4 border-black bg-yellow-200 retro-shadow p-5">
            <p class="font-bold uppercase text-sm mb-2">
                ✏ Your Turn — Implement Nested Routes
            </p>
            <ol class="list-decimal list-inside text-sm space-y-1 font-mono">
                <li>
                    Create
                    <span class="bg-white border border-black px-1">views/UserProfile.vue</span>
                    with a
                    <span class="bg-white border border-black px-1">&lt;router-view /&gt;</span>
                    inside it.
                </li>
                <li>
                    Add
                    <span class="bg-white border border-black px-1">children:</span> in
                    your router config for
                    <span class="bg-white border border-black px-1">/users/:id</span>.
                </li>
                <li>
                    Create
                    <span class="bg-white border border-black px-1">UserPosts.vue</span>,
                    <span class="bg-white border border-black px-1">UserFollowers.vue</span>,
                    <span class="bg-white border border-black px-1">UserFollowing.vue</span>.
                </li>
                <li>
                    Use
                    <span class="bg-white border border-black px-1">&lt;RouterLink&gt;</span>
                    for the tabs (check active state with
                    <span class="bg-white border border-black px-1">router-link-active</span>).
                </li>
                <li>
                    Bonus: redirect
                    <span class="bg-white border border-black px-1">/users/:id</span> →
                    <span class="bg-white border border-black px-1">/users/:id/posts</span>
                    by default.
                </li>
            </ol>
        </div>
    </main>
</template>
<script>
export default {
    created() {
        console.log(this.$route.params.id)

    }
}
</script>