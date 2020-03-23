<template>
  <div id="app" class="flex">
    <div class="grid grid-cols-12 grid-row-12 gap-4 p-4 flex-grow">
      <div
        class="row-span-5 col-span-9 bg-red-300 flex items-center justify-center border-red-700 border rounded-lg"
      >
        Calendar
      </div>
      <div
        class="row-span-11 col-span-3 bg-orange-300 flex items-center justify-center border-orange-700 border rounded-lg"
      >
        List
      </div>
      <div
        class="row-span-5 col-span-6 bg-yellow-300 flex items-center justify-center border-yellow-700 border rounded-lg"
      >
        Pictures
      </div>
      <div
        class="row-span-6 col-span-3 bg-purple-300 flex items-center justify-center border-purple-700 border rounded-lg"
      >
        Meals
      </div>
      <div
        class="row-span-1 col-span-6 bg-green-300 flex items-center justify-center border-green-700 border rounded-lg"
      >
        Weather
      </div>
      <div
        class="col-span-12 bg-blue-300 flex items-center justify-center border-blue-700 border rounded-lg"
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
.row-span-11 {
  grid-row: span 11 / span 11;
}
</style>
