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
import sortBy from 'lodash/sortBy';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
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
