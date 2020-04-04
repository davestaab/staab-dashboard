<script lang="ts">
import Vue, { VNode } from 'vue';
import { THIRTY_SECONDS } from '@/constants';
interface TimerState {
  initial: number;
}
const start = Date.now();
export default Vue.extend({
  name: 'Timer',
  props: {
    now: {
      type: Number,
      default: start
    }
  },
  data(): TimerState {
    return {
      initial: this.now
    };
  },
  computed: {
    thirtySeconds(): number {
      return Math.floor((this.now - this.initial) / THIRTY_SECONDS);
    }
  },
  render(h): VNode {
    // this works, typescript doesn't like it though
    return this.$scopedSlots.default({
      thirtySeconds: this.thirtySeconds
    }) || h();
  }
});
</script>
