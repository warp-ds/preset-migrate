const TYPES = {
  replaced: "[REPLACED]",
  removed: "[REMOVED]"
}

const emitWarning = (selector, deprecationType, message) => {console.warn(`${deprecationType} ${selector}${message ? " -> " + message : ""}`)}

export default [
  [/^(text|bg|border|divide)-(blue|green|aqua|yellow|red|bluegray|gray)(-(\d+))?$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^(text|bg|border|divide)-(current|transparent|none|white)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^divide-(dotted|solid|double|dashed)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^text-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^text-(primary|secondary|danger)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^aspect-([wh])$/, ([_]) => emitWarning(_, TYPES.replaced, "use e.g. aspect-1/1")],
  [/^aspect-none$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^flex-(shrink|grow)(-0)?$/, ([_, sg, d]) =>  emitWarning(_, TYPES.replaced, `use ${sg}${d || ""}`)],
  [/^(drop-)?shadow(-(2|3|4|10|20|30|40|none))?$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^decoration-(slice|none|clone)/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^ring(-(.*))?$/, ([_]) => emitWarning(_, TYPES.removed)],
  // filters
  [/^(backdrop-)?(filter|filter-none)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?blur(-(.*))?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(brightness|contrast|hue-rotate|saturate)-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(invert|sepia)(-0)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(invert|sepia)(-0)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^backdrop-opacity-(\d+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^outline-(none|white|black)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // semantic classes
  [/^(button|input|f)(-(.+))?$/, ([_]) => emitWarning(_, TYPES.removed, "use Warp components instead")],
  [/^(link|segment-control|field)(.+)?$/,([_]) => emitWarning(_, TYPES.removed, "use Warp components instead")],
  // old design system classes (troika)
  [/^t-(.+)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^container$/, ([_]) => emitWarning(_, TYPES.removed)],
  // miscellaneous
  [/^focus-ring$/, ([_]) =>  emitWarning(_, TYPES.replaced, "use focusable")],
  [/^transition-gpu$/, ([_]) => emitWarning(_, TYPES.removed, "use 'transform-gpu' or 'will-change-*'")],
  [/^fixed-ios-fix$/,([_]) => emitWarning(_, TYPES.removed, "use 'transform translate-z-0'")],
]
