<template>
    <main class="flex-grow flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8">
        <!-- 404 HERO -->
        <section class="text-center w-full max-w-2xl py-8">
            <div
                class="border-4 border-black p-12 bg-red-400 retro-shadow relative overflow-hidden transform rotate-1 mb-8 hover:rotate-0 transition-transform duration-300 cursor-default">
                <!-- Glitch/Background visual -->
                <div
                    class="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 border-4 border-black rounded-full mix-blend-multiply opacity-80">
                </div>
                <div
                    class="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 border-4 border-black mix-blend-multiply opacity-80 rotate-12">
                </div>

                <h2 class="text-8xl md:text-9xl font-bold mb-2 uppercase leading-none tracking-tighter relative z-10 text-white"
                    style="
              text-shadow:
                6px 6px 0 #000,
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000;
            ">
                    404
                </h2>
                <h3
                    class="text-2xl font-bold uppercase mb-2 bg-white inline-block px-4 py-1 border-4 border-black retro-shadow-sm -rotate-2 relative z-10">
                    Page Not Found
                </h3>
            </div>

            <div class="space-y-6">
                <p class="text-xl font-bold">
                    We searched the entire
                    <span
                        class="bg-pink-300 text-black px-2 py-1 border-2 border-black inline-block rotate-2 retro-shadow-sm">floppy
                        disk</span>, but this file is missing.
                </p>
                <p class="text-gray-600 font-bold">
                    Maybe you typed the URL wrong, or maybe the page was deleted in the
                    <span class="bg-black text-white px-1">Great Refactoring of '26</span>.
                </p>

                <div class="pt-6">
                    <a href="index.html"
                        class="inline-block border-4 border-black bg-yellow-300 hover:bg-yellow-400 text-black px-8 py-4 font-bold uppercase retro-shadow-sm active:translate-y-1 active:shadow-none transition-all text-xl">
                        ← Go Back Home
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>