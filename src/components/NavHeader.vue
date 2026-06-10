<template>
    <header
        class="border-4 border-black p-4 mb-8 bg-white retro-shadow flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 @click="goBackHome"
            class="text-2xl font-bold tracking-tighter uppercase border-b-4 border-transparent hover:border-black cursor-pointer">
            RetroTask
        </h1>

        <!-- NAVIGATION: Repetitive elements, perfect for `v-for` -->
        <nav class="flex gap-4 font-bold text-sm sm:text-base">
            <router-link to="/" class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">{{
                t('nav.home') }}
            </router-link>
            <router-link to="/about"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">{{ t('nav.about')
                }}</router-link>
            <router-link to="/features"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">{{ t('nav.features')
                }}</router-link>
            <router-link to="/contact"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">{{ t('nav.contact')
                }}</router-link>
            <router-link to="/users"
                class="border-2 border-transparent hover:border-black px-2 py-1 transition-colors">{{ t('nav.users')
                }}</router-link>
        </nav>

        <!-- Language Switcher -->
        <div class="flex gap-2 font-bold text-sm">
            <button @click="changeLanguage('en')"
                :class="locale === 'en' ? 'border-black bg-black text-white' : 'border-black hover:bg-black hover:text-white'"
                class="border-2 px-2 py-1 transition-colors">English</button>
            <button @click="changeLanguage('km')"
                :class="locale === 'km' ? 'border-black bg-black text-white' : 'border-black hover:bg-black hover:text-white'"
                class="border-2 px-2 py-1 transition-colors">ខ្មែរ</button>
        </div>
    </header>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, locale, availableLocales } = useI18n();

const router = useRouter();

const goBackHome = () => {
    router.push('/');
};

const changeLanguage = (lang) => {
    locale.value = lang;
    localStorage.setItem('language', lang);
};
</script>