<template>
  <div id="app">
    <div class="grid grid-cols-2 gap-4 h-screen p-4">
      <div
        class="bg-red-300 flex items-center justify-center border-red-500 border rounded-lg"
      >
        Calendar
      </div>
      <div
        class="bg-orange-300 flex items-center justify-center border-red-500 border rounded-lg"
      >
        List
      </div>
      <div
        class="bg-yellow-300 flex items-center justify-center border-red-500 border rounded-lg"
      >
        Pictures
      </div>
      <div
        class="bg-green-300 flex items-center justify-center border-red-500 border rounded-lg"
      >
        Weather
      </div>
      <div
        class="bg-blue-300 flex items-center justify-center border-red-500 border rounded-lg"
      >
        Quote
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {}
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,
body {
  height: 100%;
}
</style>
