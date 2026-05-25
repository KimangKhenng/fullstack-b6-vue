<template>
  <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-complete="handleToggle"
    @delete-todo="handleDelete" @edit-todo="handleEdit" />
</template>
<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [
        { id: 1, text: "Learn Vue", completed: false },
        { id: 2, text: "Build project", completed: false },
      ],
    };
  },
  methods: {
    handleToggle(todoId) {
      const todo = this.todos.find((t) => t.id === todoId);
      if (todo) todo.completed = !todo.completed;
    },
    handleDelete(todoId) {
      this.todos = this.todos.filter((t) => t.id !== todoId);
    },
    handleEdit(todoId, newText) {
      const todo = this.todos.find((t) => t.id === todoId);
      if (todo) todo.text = newText;
    },
  },
};
</script>