<template>
    <main class="flex-grow flex flex-col items-center w-full max-w-4xl mx-auto space-y-12">

        <hero-section :features="features" />

        <todo-card />

        <generic-color-card :color="'bg-blue-300'" class="mt-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 uppercase leading-tight">
                Ready to <span
                    class="bg-yellow-300 text-black px-2 py-1 border-2 border-black inline-block rotate-1 retro-shadow-sm">dominate</span>
                your tasks?
            </h2>
            <p class="mb-6 font-bold text-lg">Join 10,000+ users doing it real <span class="border-b-4 border-black">old
                    school</span>.</p>
            <button
                class="border-4 border-black bg-white hover:bg-pink-300 text-black px-6 py-3 font-bold uppercase retro-shadow-sm active:translate-y-1 active:shadow-none transition-all text-lg">
                Start Now
            </button>
        </generic-color-card>
    </main>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import TodoCard from '@/components/TodoCard.vue';
import GenericColorCard from '@/components/GenericColorCard.vue';
export default {
    components: {
        HeroSection,
        TodoCard,
        GenericColorCard
    },
    data() {
        return {
            features: [
                { title: 'Fast', description: 'No loading screens, just pure 1990s performance.' },
                { title: 'Simple', description: 'No complicated features you\'ll never actually use.' },
                { title: 'Stylish', description: 'Aesthetic that takes you back in time.' }]
        };
    },
};
</script>