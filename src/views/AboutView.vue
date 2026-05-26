<template>
    <main class="flex-grow flex flex-col items-center w-full max-w-4xl mx-auto space-y-12">

        <section class="text-center w-full">

            <generic-color-card :color="'bg-green-300'">
                <h2 class="text-4xl md:text-5xl font-bold mb-4 uppercase leading-tight">
                    The
                    <span
                        class="bg-white text-black px-2 py-1 border-2 border-black inline-block rotate-2 retro-shadow-sm">origin</span>
                    story
                </h2>
                <p class="text-lg font-bold">
                    We built this because modern apps are
                    <span class="bg-yellow-300 text-black px-1 border-2 border-black inline-block">too
                        complicated</span>.
                </p>
            </generic-color-card>

            <generic-color-card :color="'bg-white'">
                <h3 class="text-2xl font-bold uppercase border-b-4 border-black pb-2">
                    Our Mission
                </h3>
                <p>
                    We wanted a to-do list that just works. No sign-ups, no AI
                    integrations, no loading bars. Just plain text on a screen, with
                    bold colors and chunky borders.
                </p>
                <p>
                    Designed for the ambitious learner who wants to extract these heavy
                    HTML chunks into
                    <span class="bg-pink-200 px-1 border border-black font-bold">Vue SPA components</span>.
                </p>
            </generic-color-card>
        </section>

        <!-- TEAM CARDS: Good for v-for refactoring -->
        <section class="w-full">
            <h3 class="text-2xl font-bold uppercase mb-6 text-center">
                Meet the
                <span class="bg-blue-300 px-2 border-2 border-black retro-shadow-sm inline-block -rotate-1">Crew</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <team-card v-for="(item, index) in teamMembers" :key="index" :name="item.name"
                    :position="item.position" />
            </div>
        </section>
    </main>
</template>
<script>
import GenericColorCard from '@/components/GenericColorCard.vue';
import TeamCard from '@/components/TeamCard.vue';
export default {
    components: {
        GenericColorCard,
        TeamCard
    },
    data() {
        return {
            teamMembers: [
                { name: 'Alice', position: 'Chief Nostalgia Officer' },
                { name: 'Bob', position: 'Border Radius Hater' },
                { name: 'Charlie', position: 'Pixel Perfectionist' },
                { name: 'Diana', position: 'Shadow Specialist' }
            ]
        };
    },
}
</script>