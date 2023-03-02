import { createGenerator } from '@unocss/core';
import { beforeEach } from 'vitest';
import { presetMigrate } from './index.js'

export const removePseudo = (className) => {
  const pseudoDivider = new RegExp("[:!]")
  return pseudoDivider.test(className) ? className.split(pseudoDivider)[1] : className
}


export const getGenerator = () => createGenerator({ presets: [presetMigrate()] });
export const setup = () => {
  beforeEach(t => {
    t.uno = getGenerator();
  });
};