<template>
    <main class="flex-grow flex justify-center w-full max-w-4xl mx-auto shadow-none">
        <section class="w-full max-w-2xl">
            <!-- CONTACT HERO -->
            <div class="text-center mb-8 border-4 border-black py-8 bg-blue-300 retro-shadow transform -rotate-1">
                <h2 class="text-4xl font-bold uppercase mb-2">
                    Holler at
                    <span
                        class="bg-yellow-300 px-2 border-2 border-black inline-block rotate-3 retro-shadow-sm">us!</span>
                </h2>
                <p class="font-bold">Leave a message in our retro mailbox.</p>
            </div>

            <!-- FORM: Perfect for learning v-model! -->
            <form class="border-4 border-black p-6 bg-white retro-shadow space-y-6" onsubmit="
            event.preventDefault();
            alert(
              'Message Form Substituted! In Vue we would intercept @submit.prevent here.',
            );
          ">
                <div class="space-y-2">
                    <label class="font-bold uppercase text-lg block" for="name">Your Name</label>
                    <input type="text" id="name"
                        class="w-full border-4 border-black p-3 bg-gray-50 focus:outline-none focus:bg-yellow-100 font-bold transition-colors"
                        placeholder="Jane Doe" required />
                </div>

                <div class="space-y-2">
                    <label class="font-bold uppercase text-lg block" for="email">Electronic Mail</label>
                    <input type="email" id="email"
                        class="w-full border-4 border-black p-3 bg-gray-50 focus:outline-none focus:bg-yellow-100 font-bold transition-colors"
                        placeholder="jane@example.com" required />
                </div>

                <div class="space-y-2">
                    <label class="font-bold uppercase text-lg block" for="message">Message</label>
                    <textarea id="message" rows="4"
                        class="w-full border-4 border-black p-3 bg-gray-50 focus:outline-none focus:bg-yellow-100 font-bold transition-colors resize-none"
                        placeholder="What's on your mind?" required></textarea>
                </div>

                <button type="submit"
                    class="w-full border-4 border-black bg-pink-400 hover:bg-pink-500 text-black px-6 py-4 font-bold uppercase retro-shadow-sm active:translate-y-1 active:shadow-none transition-all text-xl">
                    Send It
                </button>
            </form>
        </section>
    </main>
</template>