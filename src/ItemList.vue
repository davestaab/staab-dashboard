<template>
  <div>
    <div class="text-left p-6" v-for="(list, i) in items" :key="i">
      <div class="font-bond text-2xl">
        {{ list.title }}
      </div>
      <ul class="list-disc px-8 py-4">
        <li
          v-for="(item, j) in list.items"
          :key="j"
          :class="{ 'line-through': item.complete }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ItemList',
  props: {
    items: Array,
    default: []
  }
});
</script>

<style scoped></style>
