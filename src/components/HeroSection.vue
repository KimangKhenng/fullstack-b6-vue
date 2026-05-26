<template>
    <section class="text-center w-full">
        <generic-color-card :color="'bg-yellow-300'">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 uppercase leading-tight">
                Get things done the <span
                    class="bg-pink-300 text-black px-2 py-1 border-2 border-black inline-block -rotate-2 retro-shadow-sm">retro</span>
                way!
            </h2>
            <p class="text-lg font-bold">A simple, <span
                    class="bg-white text-black px-1 border-2 border-black inline-block">no-nonsense</span> task manager
                to
                keep your life organized.</p>
        </generic-color-card>

        <!-- FEATURE CARDS: Repetitive structures, perfect target for extracting a <FeatureCard> component -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <feature-list v-for="(item, index) in features" :key="index" :title="item.title"
                :description="item.description" />
        </div>
    </section>
</template>
<script>
import FeatureList from '@/components/FeatureList.vue';
import GenericColorCard from '@/components/GenericColorCard.vue';
export default {
    name: 'HeroSection',
    components: {
        FeatureList,
        GenericColorCard
    },
    props: {
        features: {
            type: Array,
            required: true
        }
    }
}
</script>