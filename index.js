import rules from './rules.js'
import {
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantTaggedPseudoClasses,
  variantPseudoClassFunctions,
} from '@unocss/preset-mini/variants';
import { theme } from './theme.js';
import { variantPseudoClassesAndElements } from './_pseudo.js';

const variants = [
  variantBreakpoints(),
  variantImportant(),
  variantNegative,
  variantPseudoClassFunctions(),
  variantPseudoClassesAndElements,
  ...variantTaggedPseudoClasses({ attributifyPseudo: false }),
];

export const presetMigrate = () => {
  console.log("Read more about supported classes in Warp CSS Docs: https://warp-ds.github.io/css-docs/")
  console.log("You can find currently supported components in Warp Tech Docs: https://warp-ds.github.io/tech-docs")

  return { name: '@warp-ds/preset-migrate', theme, rules, variants }
} 
