<script setup lang="ts">
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  noCase,
  pascalCase,
  pascalSnakeCase,
  pathCase,
  sentenceCase,
  snakeCase,
  trainCase
} from 'change-case';
import InputCopyable from '../../components/InputCopyable.vue';

const input = ref('lorem ipsum dolor sit amet');

const formats = computed(() => [
  {
    label: 'Lower:',
    value: input.value.toLocaleLowerCase(),
  },
  {
    label: 'Upper:',
    value: input.value.toLocaleUpperCase(),
  },
  {
    label: 'Camel:',
    value: camelCase(input.value),
  },
  {
    label: 'Capital:',
    value: capitalCase(input.value),
  },
  {
    label: 'Constant:',
    value: constantCase(input.value),
  },
  {
    label: 'Dot:',
    value: dotCase(input.value),
  },
  {
    label: 'Kebab:',
    value: kebabCase(input.value),
  },
  {
    label: 'No case:',
    value: noCase(input.value),
  },
  {
    label: 'Pascal:',
    value: pascalCase(input.value),
  },
  {
    label: 'Pascal-snake:',
    value: pascalSnakeCase(input.value),
  },
  {
    label: 'Path:',
    value: pathCase(input.value),
  },
  {
    label: 'Sentence:',
    value: sentenceCase(input.value),
  },
  {
    label: 'Snake:',
    value: snakeCase(input.value),
  },
  {
    label: 'Train:',
    value: trainCase(input.value),
  },
  {
    label: 'Mocking:',
    value: input.value
      .split('')
      .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
      .join(''),
  },
]);

const inputLabelAlignmentConfig = {
  labelPosition: 'left' as 'left' | 'top' | undefined,
  labelWidth: '120px',
  labelAlign: 'right' as 'left' | 'right' | undefined,
};
</script>

<template>
  <c-card>
    <c-input-text
      v-model:value="input"
      label="Your string:"
      placeholder="Your string..."
      raw-text
      v-bind="inputLabelAlignmentConfig"
    />

    <div my-16px divider />

    <InputCopyable
      v-for="format in formats"
      :key="format.label"
      :value="format.value"
      :label="format.label"
      v-bind="inputLabelAlignmentConfig"
      mb-1
    />
  </c-card>
</template>
