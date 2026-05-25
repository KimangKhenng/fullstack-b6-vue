<template>
    <div class="bg-gray-100">
        <input type="checkbox" :checked="todo.completed" @change="toggleComplete">
        <span :class="{ completed: todo.completed }">
            {{ todo.text }}
        </span>
        <button class="bg-white text-black rounded-md py-2 px-4 border-black border" @click="startEdit">Edit</button>
        <button class="bg-red-500 text-white rounded-md py-2 px-4 border-black border"
            @click="deleteTodo">Delete</button>
    </div>
</template>
<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    emits: ["toggle-complete", "delete-todo", "edit-todo"],
    methods: {
        toggleComplete() {
            this.$emit("toggle-complete", this.todo.id);
        },
        deleteTodo() {
            this.$emit("delete-todo", this.todo.id);
        },
        startEdit() {
            const newText = prompt("Edit todo:", this.todo.text);
            if (newText) {
                this.$emit("edit-todo", this.todo.id, newText);
            }
        },
    }
}
</script>