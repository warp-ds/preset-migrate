export const TYPES = {
  replaced: "[REPLACED]",
  removed: "[REMOVED]"
}

const componentsMap = {
  button: "use Warp button component instead",
  link: "use Warp button component instead",
  field: "use Warp form components instead",
  card: "use Warp card component instead",
  input: "use Warp input component instead",
  segment: "use Warp button-group component instead",
  expandable: "use Warp expandable component instead",
  modal: "use Warp modal component instead",
  slider: "use Warp slider component instead",
  thumb: "use Warp slider component instead",
  spinner: "use w-spinner instead",
  grid: "",
  step: "use Warp steps component instead",
  switch: "use Warp switch component instead",
  tab: "use Warp tabs component instead",
  toast: "use Warp toast component instead",
  list: "use Warp list component instead",
}

const emitWarning = (selector, deprecationType, message) => {
  const component = Object.keys(componentsMap).find(key => selector.includes(key));
  const warningMessage = component ? componentsMap[component] : message;
  console.warn(`${deprecationType} ${selector}${warningMessage ? " -> " + warningMessage : ""}`);
}

export const colors = ["blue", "green", "aqua", "yellow", "red", "bluegray", "gray"]
export const colorHues = Array.from({ length: 10 }, (_, index) => index === 0 ? 50 : index * 100); // 50, 100, 200, ..., 900

const colorRegex = new RegExp("^(text|bg|border|divide)-(" + colors.join("|") + ")(-(\\d+))?$")

export default [
  [colorRegex, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^(text|bg|border|divide)-(current|transparent|none|white)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^divide-(dotted|solid|double|dashed)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^text-(\d+)$/, ([_]) => emitWarning(_, TYPES.replaced)],
  [/^text-(primary|secondary|danger)$/, ([_]) => emitWarning(_, TYPES.replaced)],
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
  [/^(.+)?container$/, ([_]) => emitWarning('container', TYPES.removed)],
  // miscellaneous
  [/^transition-gpu$/, ([_]) => emitWarning(_, TYPES.removed, "use 'transform-gpu' or 'will-change-*'")],
  [/^fixed-ios-fix$/,([_]) => emitWarning(_, TYPES.removed, "use 'transform translate-z-0'")],
  [/^focus-ring$/,  ([_]) => emitWarning(_, TYPES.replaced, "use focusable")],
  [/^last-child:mb-0$/,([_]) => emitWarning(_, TYPES.replaced, "use last:mb-0")],
]
