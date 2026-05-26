<template>
    <main class="flex-grow flex flex-col items-center w-full max-w-4xl mx-auto space-y-12">
        <!-- FEATURES HERO -->
        <section class="text-center w-full">
            <div class="border-4 border-black p-12 bg-pink-300 retro-shadow mb-8 relative overflow-hidden">
                <div
                    class="absolute -top-4 -right-4 w-24 h-24 bg-blue-300 border-4 border-black rounded-full mix-blend-multiply opacity-50 blur-sm">
                </div>
                <h2 class="text-4xl md:text-5xl font-bold mb-4 uppercase leading-tight relative z-10">
                    Packed with
                    <span
                        class="bg-yellow-300 text-black px-2 py-1 border-2 border-black inline-block retro-shadow-sm">nothing!</span>
                </h2>
                <p class="text-lg font-bold relative z-10">
                    All the features you need, and exactly ZERO you
                    <span class="underline decoration-4 decoration-white">don't</span>.
                </p>
            </div>

            <!-- Grid of feature specifics -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
                <!-- Box 1 -->
                <div class="border-4 border-black p-6 bg-white retro-shadow hover:bg-gray-50 transition-colors">
                    <div class="text-3xl mb-4">🚀</div>
                    <h3 class="text-2xl font-bold uppercase mb-2">Blazing Fast</h3>
                    <p>
                        It's just HTML statically served. It doesn't get faster than this
                        unless you turn off the internet.
                    </p>
                </div>
                <!-- Box 2 -->
                <div class="border-4 border-black p-6 bg-white retro-shadow hover:bg-gray-50 transition-colors">
                    <div class="text-3xl mb-4">🎨</div>
                    <h3 class="text-2xl font-bold uppercase mb-2">Retro Styling</h3>
                    <p>
                        Styled with tailwind v4, utilizing harsh shadows, thick borders,
                        and highly saturated primary colors.
                    </p>
                </div>
                <!-- Box 3 -->
                <div class="border-4 border-black p-6 bg-white retro-shadow hover:bg-gray-50 transition-colors">
                    <div class="text-3xl mb-4">🧠</div>
                    <h3 class="text-2xl font-bold uppercase mb-2">Component Ready</h3>
                    <p>
                        Learn to spot repeating structures! Every box is a
                        <span class="bg-pink-100 border border-black px-1 font-bold">components/FeatureBox.vue</span>
                        waiting to happen.
                    </p>
                </div>
                <!-- Box 4 -->
                <div class="border-4 border-black p-6 bg-white retro-shadow hover:bg-gray-50 transition-colors">
                    <div class="text-3xl mb-4">💾</div>
                    <h3 class="text-2xl font-bold uppercase mb-2">Local Storage</h3>
                    <p>
                        Who needs a cloud database? Keep your data securely locked to this
                        singular web browser tab!
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>