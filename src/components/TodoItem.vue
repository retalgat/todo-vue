<script setup>
import { ref } from 'vue'
import AppButton from '@/components/AppButton.vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const localCompleted = ref(props.todo.completed)

const emit = defineEmits(['removeTodo', 'completedTodo'])

const removeTodo = () => {
  emit('removeTodo', props.index)
}

const completedTodo = () => {
  emit('completedTodo', props.index)
}
</script>

<template>
  <div class="todo">
    <label class="todo__label">
      <input
        class="todo__checkbox"
        type="checkbox"
        v-model="localCompleted"
        @change="completedTodo"
      />
      <span class="todo__title" :class="{ 'todo__title--completed': props.todo.completed }">
        {{ props.todo.title }}
      </span>
    </label>
    <AppButton class="todo__button" title="Remove" @click="removeTodo">
      <span class="button__icon icon">
        <IconTrash />
      </span>
    </AppButton>
  </div>
</template>
