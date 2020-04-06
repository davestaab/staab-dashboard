<template>
  <div id="app" class="flex">
    <div class="grid grid-cols-12 grid-row-12 gap-4 p-4 flex-grow">
      <div
        class="row-span-5 col-span-9 bg-white flex items-center justify-center border-red-700 border rounded-lg"
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=bGJpbmJiYTBucDk4NnU0NHA3ZTN1cGpmNmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E67C73&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;mode=WEEK"
          style="border:solid 1px transparent"
          width="1200"
          height="400"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div
        class="row-span-11 col-span-3 bg-orange-300 border-orange-700 border rounded-lg"
      >
        <item-list></item-list>
      </div>
      <div
        class="row-span-5 col-span-6 bg-yellow-300 flex items-center justify-center border-yellow-700 border rounded-lg"
      >
        <div>Pictures</div>
      </div>
      <div
        class="row-span-6 col-span-3 bg-purple-300 flex items-center justify-center border-purple-700 border rounded-lg"
      >
        <div>
          Meals
        </div>
      </div>
      <div
        class="row-span-1 col-span-6 bg-green-300 flex items-center justify-center border-green-700 border rounded-lg"
      >
        <div>
          Weather
        </div>
      </div>
      <div
        class="col-span-12 bg-blue-300 flex items-center justify-center border-blue-700 border rounded-lg"
      >
        <quote :quote-list="quotes" :counter="thirtySeconds"></quote>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ItemList from '@/ItemList.vue';
import { AppState } from '@/constants';
import Quote from '@/Quote.vue';
import quotes from '@/data/quotes';
import { createTimer } from '@/Timer.ts';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  components: { ItemList, Quote },
  setup() {
    return createTimer();
  },
  data(): AppState {
    return {
      quotes
    };
  }
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
