import { CSS_DOCS_URL, TECH_DOCS_URL, CONSOLE_COLORS } from './utils.js'
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

const line = (minus = 0) => '-'.repeat((process?.stdout?.columns ?? 72) - minus);

export const presetMigrate = () => {
  console.group(`${CONSOLE_COLORS.bright}${CONSOLE_COLORS.pink}Warp CSS${CONSOLE_COLORS.reset} ${line(9)}`);
  console.log(`Read more about supported classes in Warp CSS Docs: ${CSS_DOCS_URL}`);
  console.log('Warp utilises a system of coloring border, text, background and icons using semantic color tokens. You will need to manually find the most suitable semantic class (e.g. s-bg-primary) to replace the Fabric color classes which sets static colors (e.g. bg-blue-500). Read more about this in Warp CSS Docs.');
  console.log(`You can find currently supported components in Warp Tech Docs: ${TECH_DOCS_URL}`);
  console.groupEnd();
  console.log(line());

  return { name: '@warp-ds/preset-migrate', theme, rules, variants };
} 
