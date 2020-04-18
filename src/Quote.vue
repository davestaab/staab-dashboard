<template>
  <div>
    <span data-testid="quote">{{ quote.quote }}</span>
    <span data-testid="source" class="ml-10 italic">- {{ quote.source }}</span>
  </div>
</template>

<script lang="ts">
import { Quote } from '@/constants';
import { defineComponent } from '@vue/composition-api';
const defaultQuote = {
  quote: 'Wherever you are - be all there.',
  source: 'Jim Elliot'
};
export default defineComponent({
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
      const q = this.quoteList as Array<Quote>;
      return q.length === 0
        ? defaultQuote
        : q[(this.counter as number) % q.length];
    }
  }
});
</script>

<style scoped></style>
