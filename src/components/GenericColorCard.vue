<template>
    <div
        :class="`border-4 border-black p-8 ${color} retro-shadow mb-8 transform transition-transform hover:-translate-y-1`">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GenericColorCard',
    props: {
        color: {
            type: String,
            default: 'bg-yellow-300'
        },
    }
}
</script>