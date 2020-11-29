<template>
  <div id="app">
    <div class="absolute mx-4 text-xs text-gray-400">
      {{ lastBuiltLocal }}
    </div>
    <div class="grid grid-cols-12 grid-row-12 gap-4 p-4 flex-grow h-full">
      <div
        class="row-span-11 col-span-9 bg-white flex items-center justify-center border-red-700 border rounded-lg"
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=bGJpbmJiYTBucDk4NnU0NHA3ZTN1cGpmNmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E67C73&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
          style="border:solid 1px transparent"
          width="1400"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div
        class="row-span-11 col-span-3 bg-orange-300 border-orange-700 border rounded-lg overflow-hidden"
      >
        <item-list :items="itemLists"></item-list>
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
import Quote from '@/Quote.vue';
import quotes from '@/data/quotes.ts';
import itemLists from '@/data/itemLists';
import { createTimer } from '@/Timer.ts';
import { defineComponent, Ref } from '@vue/composition-api';
import { ItemLists, Quote as QuoteType } from '@/constants';
import useCheckBuildTime from '@/CheckBuild';

interface AppState {
  quotes: Array<QuoteType>;
  itemLists: ItemLists;
  thirtySeconds: Readonly<Ref<number>>;
  lastBuiltLocal: Readonly<Ref<string>>;
}
export default defineComponent({
  name: 'App',
  components: { ItemList, Quote },
  setup(): AppState {
    const { thirtySeconds, fifteenMinutes } = createTimer();
    const { lastBuiltLocal } = useCheckBuildTime(fifteenMinutes);

    return {
      quotes,
      itemLists,
      thirtySeconds,
      lastBuiltLocal
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
</style>
