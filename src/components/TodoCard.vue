<template>
    <section class="w-full max-w-lg border-4 border-black p-6 bg-pink-200 retro-shadow">
        <h2 class="text-2xl font-bold mb-6 uppercase flex items-center justify-between">
            <span>Your Tasks</span>
            <span id="task-counter" class="text-sm bg-black text-white px-2 py-1 retro-shadow-sm">3 left</span>
        </h2>

        <form id="todo-form" class="flex gap-2 mb-6">
            <input type="text" id="todo-input"
                class="flex-grow border-4 border-black p-2 bg-white focus:outline-none focus:bg-yellow-50 font-bold placeholder-gray-500"
                placeholder="What needs to be done?">
            <button type="submit"
                class="border-4 border-black bg-blue-400 hover:bg-blue-500 text-black px-4 py-2 font-bold uppercase retro-shadow-sm active:translate-y-1 active:shadow-none transition-all">Add</button>
        </form>

        <ul id="todo-list" class="space-y-4">
            <!-- Static Item 1: Perfect to demonstrate `v-for` refactoring -->
            <li
                class="flex items-center justify-between border-4 border-black p-3 bg-white retro-shadow-sm group hover:bg-gray-50">
                <label class="flex items-center gap-3 cursor-pointer flex-grow">
                    <input type="checkbox"
                        class="w-6 h-6 border-4 border-black appearance-none checked:bg-black checked:after:content-['✓'] checked:after:text-white checked:after:absolute relative flex items-center justify-center cursor-pointer">
                    <span
                        class="font-bold cursor-pointer group-has-[:checked]:line-through group-has-[:checked]:text-gray-500">Learn
                        HTML & CSS</span>
                </label>
                <button
                    class="text-black hover:bg-red-500 hover:text-white border-2 border-transparent hover:border-black font-bold uppercase px-2 transition-colors delete-btn">Del</button>
            </li>

            <!-- Static Item 2 -->
            <li
                class="flex items-center justify-between border-4 border-black p-3 bg-white retro-shadow-sm group hover:bg-gray-50">
                <label class="flex items-center gap-3 cursor-pointer flex-grow">
                    <input type="checkbox" checked
                        class="w-6 h-6 border-4 border-black appearance-none checked:bg-black checked:after:content-['✓'] checked:after:text-white checked:after:absolute relative flex items-center justify-center cursor-pointer">
                    <span
                        class="font-bold cursor-pointer group-has-[:checked]:line-through group-has-[:checked]:text-gray-500">Refactor
                        to Vue.js</span>
                </label>
                <button
                    class="text-black hover:bg-red-500 hover:text-white border-2 border-transparent hover:border-black font-bold uppercase px-2 transition-colors delete-btn">Del</button>
            </li>

            <!-- Static Item 3 -->
            <li
                class="flex items-center justify-between border-4 border-black p-3 bg-white retro-shadow-sm group hover:bg-gray-50">
                <label class="flex items-center gap-3 cursor-pointer flex-grow">
                    <input type="checkbox"
                        class="w-6 h-6 border-4 border-black appearance-none checked:bg-black checked:after:content-['✓'] checked:after:text-white checked:after:absolute relative flex items-center justify-center cursor-pointer">
                    <span
                        class="font-bold cursor-pointer group-has-[:checked]:line-through group-has-[:checked]:text-gray-500">Master
                        State Management</span>
                </label>
                <button
                    class="text-black hover:bg-red-500 hover:text-white border-2 border-transparent hover:border-black font-bold uppercase px-2 transition-colors delete-btn">Del</button>
            </li>
        </ul>
    </section>
</template>