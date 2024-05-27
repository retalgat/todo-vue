<script setup>
import { onMounted, ref, watch } from 'vue'
import TodoForm from '@/components/TodoForm.vue'
import TodoItem from '@/components/TodoItem.vue'

const todos = ref([])

onMounted(() => {
  const savedTodos = localStorage.getItem('todos')
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos)
  }
})

watch(
  todos,
  (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos))
  },
  { deep: true }
)

const handleAddTodo = (title) => {
  todos.value.unshift({
    id: Date.now(),
    title: title,
    completed: false
  })
}

const handleRemoveTodo = (index) => {
  todos.value.splice(index, 1)
}

const handleCompletedTodo = (index) => {
  todos.value[index].completed = !todos.value[index].completed
}
</script>

<template>
  <section class="section">
    <h1 class="section__title">
      Today
      <span v-if="todos.length >= 1">
        {{ todos.length }}
      </span>
    </h1>
    <TodoForm @add-todo="handleAddTodo" />
    <ul class="todo-list" v-if="todos.length >= 1">
      <li class="todo-list__item" v-for="(todo, index) in todos" :key="todo.id">
        <TodoItem
          :todo="todo"
          :index="index"
          @remove-todo="handleRemoveTodo"
          @completed-todo="handleCompletedTodo"
        />
      </li>
    </ul>
    <p class="empty" v-else>You don't have any to-do list today.</p>
  </section>
</template>
