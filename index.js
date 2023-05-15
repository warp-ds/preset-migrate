import { CSS_DOCS_URL, TECH_DOCS_URL } from './utils.js'
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
  console.log(`Read more about supported classes in Warp CSS Docs: ${CSS_DOCS_URL}`)
  console.log(`You can find currently supported components in Warp Tech Docs: ${TECH_DOCS_URL}`)

  return { name: '@warp-ds/preset-migrate', theme, rules, variants }
} 
