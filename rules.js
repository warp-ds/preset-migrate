import {
  TYPES,
  COLOR_REGEXPS,
  COMING_SOON_MSG,
  emitWarning,
  CSS_DOCS_URL,
  COLOR_MESSAGES,
} from "./utils.js";

export default [
  [COLOR_REGEXPS.border, ([_]) => emitWarning(_, TYPES.replaced, COLOR_MESSAGES.border)],
  [COLOR_REGEXPS.background, ([_]) => emitWarning(_, TYPES.replaced, COLOR_MESSAGES.background)],
  [COLOR_REGEXPS.text, ([_]) => emitWarning(_, TYPES.replaced, COLOR_MESSAGES.text)],
  [/^text-(primary|secondary|danger)$/, ([_]) => emitWarning(_, TYPES.replaced, COLOR_MESSAGES.text)],
  [/^text-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/font-size for supported classes`)],
  [COLOR_REGEXPS.divide, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^divide-(current|transparent|none)$/, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^divide-(dotted|solid|double|dashed)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^leading-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/line-height for supported classes`)],
  [/^aspect-([wh])-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced, "use fractions instead, e.g. aspect-4/3")],
  [/^flex-(shrink|grow)(-0)?$/, ([_, sg, d]) =>  emitWarning(_, TYPES.replaced, `use ${sg}${d || ""}`)],
  [/^shadow-none$/, ([_]) => emitWarning(_,TYPES.removed)],
  [/^shadow(-(2|3|4|10|20|30|40))?$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/box-shadow for supported shadow classes`)],
  [/^drop-shadow(-(2|3|4|10|20|30|40|none))?$/, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^decoration-(slice|none|clone)/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^ring(?:-(.*))$/, ([_]) => emitWarning(_, TYPES.removed)],
  // filters
  [/^(backdrop-)?(filter|filter-none)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^blur(-(.*))?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^backdrop-blur-(sm|md|lg|2xl|3xl)?$/, ([_]) => emitWarning(_, TYPES.replaced, 'Use sizes s|m|l|xxl|xxxl (instead of sm|md|lg|2xl|3xl)')],
  [/^(backdrop-)?(brightness|contrast|hue-rotate|saturate)-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(invert|sepia)(-0)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^backdrop-opacity-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // outline
  [/^outline-(white|black)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // semantic classes
  [/^(button|f)(-(.+))?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^input(--is-invalid|--is-disabled|--is-select__wrap|--is-read-only|-toggle)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^segment-control((-|_).+)?$/,([_]) => emitWarning(_, TYPES.removed)],
  [/^field(-hint|-label|)?$/,([_]) => emitWarning(_, TYPES.removed)],
  [/^link(--(block|dark))?$/,([_]) => emitWarning(_, TYPES.removed)],
  // old design system classes (troika)
  [/^t-(.+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // Do not target page-container, but container class with pseudo variants
  [/^([^page-].+)?container$/, ([_]) => emitWarning('container', TYPES.removed)],
  // miscellaneous
  [/^transition-gpu$/, ([_]) => emitWarning(_, TYPES.removed, "use 'transform-gpu' or 'will-change-*'")],
  [/^fixed-ios-fix$/,([_]) => emitWarning(_, TYPES.removed, "use 'transform translate-z-0'")],
  [/^focus-ring$/,  ([_]) => emitWarning(_, TYPES.replaced, "use 'focusable'")],
  [/^color-focused?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^color-background(-.+)?$/, ([_]) => emitWarning(_, TYPES.removed, COLOR_MESSAGES.background)],
  [/^color-text(-.+)?$/, ([_]) => emitWarning(_, TYPES.removed, COLOR_MESSAGES.text)],
  // removed Warp classes
  [/^(s-.+)-default$/, ([_, c]) => emitWarning(_, TYPES.replaced, `use '${c}'`)],
  [/^s-text-link-hover(-active)?$/, ([_]) => emitWarning(_, TYPES.removed, `use 's-text-link'`)],
  [/^(s-.+)-active-hover$/, ([_, c]) => emitWarning(_, TYPES.removed, `use '${c}-selected-hover' (if available)'`)],
]
