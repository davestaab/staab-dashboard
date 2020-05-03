<template>
  <div>
    <div>local: {{ lastBuiltLocal }}</div>
    <div>buildTime: {{ build.buildTime }}</div>
  </div>
</template>

<script>
import useCheckBuildTime from '@/CheckBuild';
import { createTimer } from '@/Timer';

export default {
  name: 'CheckBuildTestComponent.vue',
  setup() {
    const { fifteenMinutes } = createTimer();
    const { build, lastBuiltLocal } = useCheckBuildTime(fifteenMinutes);
    return {
      build,
      lastBuiltLocal
    };
  }
};
</script>
