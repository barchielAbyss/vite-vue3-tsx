<template>
  <div>
    <Suspense :ref="onBindNodeEvent">
      <Test />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>

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

      const onBindNodeEvent = (el) => {
        el.addEventListener('click', () => {
          message.value = 'Hello World!'
        })
      }

      return {
        message,
        onBindNodeEvent,
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
