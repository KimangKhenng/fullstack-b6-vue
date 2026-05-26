<template>
  <div class="min-h-screen flex flex-col p-4 md:p-8 selection:bg-pink-300 selection:text-black">
    <nav-header />

    <router-view />

    <site-footer />
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import TodoCard from '@/components/TodoCard.vue';
import GenericColorCard from '@/components/GenericColorCard.vue';
import SiteFooter from '@/components/SiteFooter.vue';
export default {
  components: {
    NavHeader,
    HeroSection,
    TodoCard,
    GenericColorCard,
    SiteFooter
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