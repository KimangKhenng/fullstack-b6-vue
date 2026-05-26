<template>
    <div class="border-4 border-black p-6 bg-yellow-100 retro-shadow flex gap-4 items-center">
        <div
            class="w-16 h-16 bg-blue-400 border-4 border-black retro-shadow-sm rounded-full flex items-center justify-center font-bold text-2xl">
            {{ firstLetter }}
        </div>
        <div>
            <h4 class="font-bold text-xl">{{ name }}</h4>
            <p class="text-sm">{{ position }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Alice'
        },
        position: {
            type: String,
            default: 'Officer'
        }
    },
    computed: {
        firstLetter() {
            return this.name.charAt(0).toUpperCase()
        }
    }
}
</script>