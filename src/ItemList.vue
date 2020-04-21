<template>
  <div>
    <div class="text-left px-6 my-2" v-for="(list, i) in items" :key="i">
      <div class="font-bond text-xl">
        {{ list.title }}
      </div>
      <items :items="list.items"></items>
    </div>
  </div>
</template>

<script lang="ts">
import Items from '@/Items.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ItemList',
  components: { Items },
  props: {
    items: Array
  }
});
</script>

<style scoped></style>
