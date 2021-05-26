// windi.config.ts
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  plugins: [
    require('windicss/plugin/typography'),
    require('@windicss/plugin-scrollbar'),
    require('@windicss/plugin-question-mark'),
    require('@windicss/plugin-interaction-variants'),
  ],
});
