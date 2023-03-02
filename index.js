import rules from './rules.js'
import {
  variantBreakpoints,
  variantImportant,
  variantNegative,
  variantTaggedPseudoClasses,
  variantPseudoClassFunctions,
  variantPseudoClassesAndElements,
} from '@unocss/preset-mini/variants';
import { useTheme } from './theme.js';

const variants = [
  variantBreakpoints(),
  variantImportant(),
  variantNegative,
  variantPseudoClassFunctions(),
  variantPseudoClassesAndElements(),
  ...variantTaggedPseudoClasses({ attributifyPseudo: false }),
];

export const presetMigrate = () => {
  console.log("Read more about supported classes here: https://warp-ds.github.io/css-docs/")
  const theme = useTheme();
  return { name: '@warp-ds/preset-migrate', theme, rules, variants }
} 
