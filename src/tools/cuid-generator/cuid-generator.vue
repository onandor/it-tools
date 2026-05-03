<script setup lang="ts">
import cuid from '@bugsnag/cuid';
import * as cuid2 from '@paralleldrive/cuid2';
import { computedRefreshable } from '@/composable/computedRefreshable.ts';
import _ from 'lodash';
import { useCopy } from '@/composable/copy.ts';

const versions = ['v1', 'v2'];
const version = useStorage<(typeof versions)[number]>('cuid-generator:version', 'v1');
const amount = useStorage('cuid-generator:quantity', 1);

const [cuids, refreshCUIDs] = computedRefreshable(() => {
  const generatorFn = version.value === 'v1' ? cuid : cuid2.createId;
  const ids = _.times(amount.value, () => generatorFn());
  return ids.join('\n');
});

const { copy } = useCopy({ source: cuids, text: 'CUIDs copied to the clipboard' });
</script>

<template>
  <div>
    <c-buttons-select v-model:value="version" :options="versions" label="CUID version" label-width="100px" mb-2 />

    <div mb-2 flex items-center>
      <span w-100px>Quantity </span>
      <n-input-number v-model:value="amount" flex-1 :min="1" :max="50" placeholder="CUID quantity" />
    </div>

    <c-card mt-5 flex data-test-id="ulids">
      <pre m-0 m-x-auto>{{ cuids }}</pre>
    </c-card>

    <div flex justify-center gap-3 mt-5>
      <c-button autofocus @click="copy()"> Copy </c-button>
      <c-button @click="refreshCUIDs"> Refresh </c-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
::v-deep(.cuid-display) {
  textarea {
    text-align: center;
  }
}
</style>