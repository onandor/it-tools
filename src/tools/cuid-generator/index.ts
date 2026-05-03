import { Key } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin.ts';

export const tool = defineTool({
  name: translate('tools.cuid-generator.title'),
  path: '/cuid-generator',
  description: translate('tools.cuid-generator.description'),
  keywords: ['cuid', 'generator', 'id', 'identifier', 'random', 'alphanumeric', 'unique'],
  component: () => import('./cuid-generator.vue'),
  icon: Key,
  createdAt: new Date('2026-05-02'),
});