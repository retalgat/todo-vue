<script setup>
import { ref } from 'vue'
import AppButton from '@/components/AppButton.vue'

const title = ref('')

const emit = defineEmits(['addTodo'])

const addTodo = () => {
  if (title.value.trim() !== '') {
    emit('addTodo', title.value)
    title.value = ''
  }
}
</script>

<template>
  <form class="form" @submit.prevent="addTodo">
    <input class="input" type="text" placeholder="Enter a task" v-model="title" />
    <AppButton class="button--primary">
      <span class="button__icon icon">
        <IconPlus />
      </span>
      Add a new task
    </AppButton>
  </form>
</template>
