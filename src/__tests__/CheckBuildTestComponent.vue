<template>
  <div>
    <div>local: {{ lastBuiltLocal }}</div>
    <div>buildTime: {{ build.buildTime }}</div>
  </div>
</template>

<script lang="ts">
import useCheckBuildTime from '@/CheckBuild';
import { createTimer } from '@/Timer';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'CheckBuildTestComponent.vue',
  setup() {
    const { fifteenMinutes } = createTimer();
    const { build, lastBuiltLocal } = useCheckBuildTime(fifteenMinutes);
    return {
      build,
      lastBuiltLocal
    };
  }
});
</script>
