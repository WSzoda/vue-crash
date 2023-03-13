<script setup>
import { RouterLink,RouterView } from 'vue-router'
</script>

<template>
  <header class="container">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </header>
    <Transition name="route">
        <RouterView />
    </Transition>
</template>

<style scoped>
  .container {
    width: 330px;
    margin: 10px auto;
  }
  .container a {
    padding-right: 5px;
  }
  .route-enter-from{
      opacity: 0;
      transform: translateX(100px);
  }
  .route-enter-active{
      transition: all 0.2s ease;
  }
</style>
