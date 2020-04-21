<template>
  <div>
    <div data-testid="now">now: {{ now }}</div>
    <div data-testid="thirtySeconds">thirtySeconds: {{ thirtySeconds }}</div>
    <div data-testid="fiveSeconds">fiveSeconds: {{ fiveSeconds }}</div>
    <div data-testid="fifteenMinutes">fifteenMinutes: {{ fifteenMinutes }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { createTimer } from '@/Timer';

export default defineComponent({
  name: 'TimerTestComponent',
  setup() {
    return createTimer();
  }
});
</script>

<style scoped></style>
