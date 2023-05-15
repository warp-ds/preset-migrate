import { TYPES, colorRegex, emitWarning } from "./utils.js";

export default [
  [colorRegex, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^(text|border|divide)-(current|transparent|none|white)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^bg-(none|white)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^divide-(dotted|solid|double|dashed)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^text-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^text-(primary|secondary|danger)$/, ([_]) => emitWarning(_, TYPES.replaced, "more info on replacements coming soon")],
  [/^aspect-([wh])-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced, "use fractions instead, e.g. aspect-4/3")],
  [/^aspect-none$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^flex-(shrink|grow)(-0)?$/, ([_, sg, d]) =>  emitWarning(_, TYPES.replaced, `use ${sg}${d || ""}`)],
  [/^(drop-)?shadow(-(2|3|4|10|20|30|40|none))?$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^decoration-(slice|none|clone)/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^ring(?:-(.*))$/, ([_]) => emitWarning(_, TYPES.removed)],
  // filters
  [/^(backdrop-)?(filter|filter-none)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?blur(-(.*))?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(brightness|contrast|hue-rotate|saturate)-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(invert|sepia)(-0)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^backdrop-opacity-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // outline
  [/^outline-(none|white|black)$/, ([_]) => emitWarning(_, TYPES.removed)],
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
  [/^focus-ring$/,  ([_]) => emitWarning(_, TYPES.replaced, "use focusable")],
  [/^last-child:mb-0$/,([_]) => emitWarning(_, TYPES.replaced, "use last:mb-0")],
]
