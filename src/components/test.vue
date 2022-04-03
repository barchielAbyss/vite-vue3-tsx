<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'JestTest',
    setup() {
      const message = ref('Hello World')

      return {
        message,
        changeMessage() {
          message.value = 'Goodbye World'
        },
      }
    },
  }
</script>

<style>
  div {
    color: red;
  }
</style>
