import { createGenerator } from '@unocss/core';
import { beforeEach } from 'vitest';
import { presetMigrate } from './index.js'


export const getGenerator = () => createGenerator({ presets: [presetMigrate()] });
export const setup = () => {
  beforeEach(t => {
    t.uno = getGenerator();
  });
};