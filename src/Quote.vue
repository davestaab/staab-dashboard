<template>
  <div>
    <span data-testid="quote">{{ quote.quote }}</span>
    <span data-testid="source" class="ml-10 italic">- {{ quote.source }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Quote } from '@/constants';
const defaultQuote = {
  quote: 'Wherever you are - be all there.',
  source: 'Jim Elliot'
};
export default Vue.extend({
  name: 'Quote',
  props: {
    quoteList: {
      type: Array,
      default: () => []
    },
    counter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    quote(): Quote {
      return this.quoteList.length === 0
        ? defaultQuote
        : (this.quoteList[this.counter % this.quoteList.length] as Quote);
    }
  }
});
</script>

<style scoped></style>
