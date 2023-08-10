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
  [/^bg-none$/, ([_]) => emitWarning(_, TYPES.replaced,COMING_SOON_MSG)],
  [COLOR_REGEXPS.text, ([_]) => emitWarning(_, TYPES.replaced, COLOR_MESSAGES.text)],
  [/^text-(primary|secondary|danger)$/, ([_]) => emitWarning(_, TYPES.replaced, COLOR_MESSAGES.text)],
  [/^text-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/font-size for supported classes`)],
  [COLOR_REGEXPS.divide, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^divide-(current|transparent|none)$/, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^divide-(dotted|solid|double|dashed)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^leading-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/line-height for supported classes`)],
  [/^aspect-([wh])-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced, "use fractions instead, e.g. aspect-4/3")],
  [/^aspect-none$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^flex-(shrink|grow)(-0)?$/, ([_, sg, d]) =>  emitWarning(_, TYPES.replaced, `use ${sg}${d || ""}`)],
  [/^shadow-none$/, ([_]) => emitWarning(_,TYPES.removed)],
  [/^shadow(-(2|3|4|10|20|30|40))?$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/box-shadow for supported shadow classes`)],
  [/^drop-shadow(-(2|3|4|10|20|30|40|none))?$/, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^decoration-(slice|none|clone)/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^ring(?:-(.*))$/, ([_]) => emitWarning(_, TYPES.removed)],
  // filters
  [/^(backdrop-)?(filter|filter-none)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?blur(-(.*))?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(brightness|contrast|hue-rotate|saturate)-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(invert|sepia)(-0)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^backdrop-opacity-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // outline
  [/^outline-(white|black)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // semantic classes
  [/^(button|input|f)(-(.+))?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(link|segment-control|field)(.+)?$/,([_]) => emitWarning(_, TYPES.removed)],
  // old design system classes (troika)
  [/^t-(.+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // Do not target page-container, but container class with pseudo variants
  [/^([^page-].+)?container$/, ([_]) => emitWarning('container', TYPES.removed)],
  // miscellaneous
  [/^transition-gpu$/, ([_]) => emitWarning(_, TYPES.removed, "use 'transform-gpu' or 'will-change-*'")],
  [/^fixed-ios-fix$/,([_]) => emitWarning(_, TYPES.removed, "use 'transform translate-z-0'")],
  [/^focus-ring$/,  ([_]) => emitWarning(_, TYPES.replaced, "use 'focusable'")],
  // deprecated Warp classes
  [/^s-(.+)-default$/, ([_]) => emitWarning(_, TYPES.deprecated, `use '${_.replace('-default', '')}'`)]
]
