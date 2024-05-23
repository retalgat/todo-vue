<script setup>
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <header class="header">
    <p class="header__title">Todo</p>
    <AppButton class="button--primary">
      <span class="button__icon icon">
        <IconPlus />
      </span>
      Add new task
    </AppButton>
  </header>
</template>
