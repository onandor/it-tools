import antfu from '@antfu/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';
import unocss from '@unocss/eslint-config/flat';

const compat = new FlatCompat();

export default antfu(
  {
    ignores: [],
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
    vue: true,
    typescript: true,
  },
  ...compat.extends('./.eslintrc-auto-import.json'),
  unocss,
  {
    rules: {
      'curly': ['error', 'all'],
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          allowNamedExports: true,
          functions: false,
        },
      ],
      'vue/no-empty-component-block': ['error'],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@vueuse/core',
              importNames: ['useClipboard'],
              message: 'Please use local useCopy from src/composable/copy.ts instead of useClipboard.',
            },
          ],
        },
      ],
      'perfectionist/sort-imports': ['off'],
    },
  },
);
