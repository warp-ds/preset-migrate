import { TECH_DOCS_URL, CONSOLE_COLORS } from './utils.js'
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
  console.log(`This UnoCSS preset is here to help you migrate from previous versions\nof Warp DS as well as legacy design systems (e.g. Troika, Fabric).`);
  console.log('\nWarp utilises a system of coloring border, text, background and icons\nusing semantic color tokens. You will need to manually find the most\nsuitable semantic class (e.g. s-bg-primary) to replace any legacy\nclasses which sets static colors (e.g. bg-blue-500).');
  console.log(`\nRead more about supported classes and components in Warp Tech Docs:\n${TECH_DOCS_URL}`);
  console.log(`\n${CONSOLE_COLORS.warn}REMINDER:${CONSOLE_COLORS.reset} Don't forget to remove 'preset-migrate' from your UnoCSS\nsetup once you are done migrating. ${CONSOLE_COLORS.warn}:)${CONSOLE_COLORS.reset}`);
  console.groupEnd();
  console.log(line());

  return { name: '@warp-ds/preset-migrate', theme, rules, variants };
} 
