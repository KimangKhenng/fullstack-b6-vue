<template>
    <div class="border-4 border-black p-4 bg-white retro-shadow transition-colors hover:bg-blue-100">
        <h3 class="font-bold text-xl mb-2 border-b-2 border-black inline-block">{{ title }}</h3>
        <p class="text-sm">{{ description }}</p>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>