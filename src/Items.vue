<template>
  <ul class="list-disc px-8 py-4">
    <li
      v-for="(item, i) in sortedItems"
      :key="i"
      :class="{ 'line-through': item.complete }"
      data-testid="list-item"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { sortBy } from 'lodash';

export default Vue.extend({
  name: 'Items',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortedItems() {
      return sortBy(this.items, 'complete');
    }
  }
});
</script>

<style scoped></style>
