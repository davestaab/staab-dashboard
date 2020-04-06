import {
  computed,
  ref,
  onMounted,
  onUnmounted,
  Ref
} from '@vue/composition-api';
import { FIVE_SECONDS, THIRTY_SECONDS } from '@/constants';

export interface TimerState {
  now: Ref<number>;
  thirtySeconds: Readonly<Ref<number>>;
  fiveSeconds: Readonly<Ref<number>>;
}

export function createTimer(start = Date.now()): TimerState {
  const initial = ref(start);
  const now = ref(start);

  const createComputedPeriod = (period: number) => (): number => {
    return Math.floor((now.value - initial.value) / period);
  };
  const thirtySeconds = computed(createComputedPeriod(THIRTY_SECONDS));
  const fiveSeconds = computed(createComputedPeriod(FIVE_SECONDS));

  function t() {
    now.value = Date.now();
  }

  let intervalRef: number;
  onMounted(() => {
    intervalRef = window.setInterval(t, FIVE_SECONDS);
  });

  onUnmounted(() => {
    window.clearInterval(intervalRef);
  });

  return {
    now,
    thirtySeconds,
    fiveSeconds
  };
}
