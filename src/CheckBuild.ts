import { Build } from '@/constants';
import { computed, reactive, Ref, watch } from '@vue/composition-api';
interface CheckBuildTime {
  build: Build;
  lastBuiltLocal: Readonly<Ref<string>>;
}
export default function useCheckBuildTime(
  watchIntervalRef: Ref<number>
): CheckBuildTime {
  const build = reactive({
    buildTime: 0
  });
  const lastBuiltLocal = computed(() => {
    return build.buildTime === 0
      ? '0'
      : new Date(build.buildTime).toLocaleString();
  });
  async function checkBuildTime(): Promise<void> {
    const serverBuild: Build = await fetch('build.json').then(d => d.json());
    if (serverBuild.buildTime !== build.buildTime && build.buildTime !== 0) {
      build.buildTime = serverBuild.buildTime;
      location.reload();
    } else {
      build.buildTime = serverBuild.buildTime;
    }
  }
  watch(
    () => watchIntervalRef.value,
    async () => {
      await checkBuildTime();
    }
  );
  return {
    build,
    lastBuiltLocal
  };
}
