<template>
    <div
        class="border-4 border-black bg-white retro-shadow flex flex-col hover:-translate-y-1 transition-transform group">
        <div class="h-24 bg-pink-300 border-b-4 border-black flex items-end px-4 pb-2">
            <div
                class="w-16 h-16 bg-white border-4 border-black retro-shadow-sm rounded-full flex items-center justify-center font-bold text-3xl translate-y-8">
                {{ firstLetter }}
            </div>
        </div>
        <div class="p-6 pt-10 flex flex-col flex-grow">
            <h3 class="font-bold text-2xl uppercase">{{ user.name }}</h3>
            <p class="text-gray-600 text-sm mb-4">@{{ user.username }}</p>
            <p class="text-sm mb-6 flex-grow">
                {{ user.bio }}
            </p>
            <router-link :to="`/users/${user.id}`"
                class="text-center border-4 border-black bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 font-bold uppercase retro-shadow-sm active:translate-y-1 active:shadow-none transition-all">
                View Profile
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            default: () => {
                return {
                    id: '1',
                    username: 'alice_retro',
                    name: 'Alice',
                    bio: 'Loves border-radius: 0. Hates soft gradients.'
                }
            }
        }
    },
    computed: {
        firstLetter() {
            return this.user.name.charAt(0).toUpperCase()
        }
    }
}
</script>