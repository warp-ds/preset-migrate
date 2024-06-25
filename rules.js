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
  [/^text-\d+$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/font-size for supported classes`)],
  [COLOR_REGEXPS.divide, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^divide-(current|transparent|none)$/, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^divide-(dotted|solid|double|dashed)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^leading-\d+$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/line-height for supported classes`)],
  [/^aspect-[wh]-\d+$/, ([_]) => emitWarning(_, TYPES.replaced, "use fractions instead, e.g. aspect-4/3")],
  [/^flex-(shrink|grow)(-0)?$/, ([_, sg, d]) =>  emitWarning(_, TYPES.replaced, `use ${sg}${d || ""}`)],
  [/^shadow-none$/, ([_]) => emitWarning(_,TYPES.removed)],
  [/^shadow(-(2|3|4|10|20|30|40))?$/, ([_]) => emitWarning(_, TYPES.replaced, `check ${CSS_DOCS_URL}/box-shadow for supported shadow classes`)],
  [/^drop-shadow(-(2|3|4|10|20|30|40|none))?$/, ([_]) => emitWarning(_, TYPES.replaced, COMING_SOON_MSG)],
  [/^decoration-(slice|none|clone)/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^ring(?:-.*)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // filters
  [/^(backdrop-)?(filter|filter-none)$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^blur(-.*)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^backdrop-blur-(sm|md|lg|2xl|3xl)?$/, ([_]) => emitWarning(_, TYPES.replaced, 'Use sizes s|m|l|xxl|xxxl (instead of sm|md|lg|2xl|3xl)')],
  [/^(backdrop-)?(brightness|contrast|hue-rotate|saturate)-\d+$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^(backdrop-)?(invert|sepia)(-0)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^backdrop-opacity-\d+$/, ([_]) => emitWarning(_, TYPES.removed)],
  // outline
  [/^outline-(white|black)$/, ([_]) => emitWarning(_, TYPES.removed)],
  // semantic classes
  [/^(button|f)(-.+)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^input(--is-invalid|--is-disabled|--is-select__wrap|--is-read-only|-toggle)?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^segment-control([-_].+)?$/,([_]) => emitWarning(_, TYPES.removed)],
  [/^field(-hint|-label)?$/,([_]) => emitWarning(_, TYPES.removed)],
  [/^link(--(block|dark))?$/,([_]) => emitWarning(_, TYPES.removed)],
  // old design system classes (troika)
  [/^t-.+$/, ([_]) => emitWarning(_, TYPES.removed)],
  // Do not target page-container, but container class with pseudo variants
  [/^([^page-].+)?container$/, ([_]) => emitWarning('container', TYPES.removed)],
  // miscellaneous
  [/^transition-gpu$/, ([_]) => emitWarning(_, TYPES.removed, "use 'transform-gpu' or 'will-change-*'")],
  [/^fixed-ios-fix$/,([_]) => emitWarning(_, TYPES.removed, "use 'transform translate-z-0'")],
  [/^focus-ring$/,  ([_]) => emitWarning(_, TYPES.replaced, "use 'focusable'")],
  [/^color-focused?$/, ([_]) => emitWarning(_, TYPES.removed)],
  [/^color-background(-.+)?$/, ([_]) => emitWarning(_, TYPES.removed, COLOR_MESSAGES.background)],
  [/^color-text(-.+)?$/, ([_]) => emitWarning(_, TYPES.removed, COLOR_MESSAGES.text)],

  // *** Warp v1 -> v2 ***
  // replaced semantic classes
  [/^(s-.+)-default$/, ([_, c]) => emitWarning(_, TYPES.replaced, `use '${c}'`)],
  // removed semantic classes
  [/^s-text-link-hover(-active)?$/, ([_]) => emitWarning(_, TYPES.removed, `use 's-text-link'`)],
  [/^(s-.+)-active-hover$/, ([_, c]) => emitWarning(_, TYPES.removed, `use '${c}-selected-hover' (if available)'`)],
  // removed internal classes
  [/^i-(bg|border|text|shadow)-\$(.*)$/, ([_, prop, token]) => emitWarning(_, TYPES.removed, `all internal classes (classes with 'i-' prefix) and most component specific tokens have been removed, ${COLOR_MESSAGES[prop==='bg'?'background':prop]} (or use class with arbitrary token value instead: '${prop}-[--w-${token}]', if this particular token still exists)`)],
  // removed alpha tokens
  [/^(.*--w-.*)-alpha(\d+)(.*)$/, ([_, prefix, alpha, suffix]) => emitWarning(_, TYPES.removed, `all 'alpha' tokens have been removed, try '${prefix}/${alpha}${suffix}', or reference ${CSS_DOCS_URL} for a suitable replacement`)],
  // removed primitive color tokens
  [/^.*--w-(bluegray|petroleum)-[1-9]\d{2,3}.*$/, ([_, color]) => emitWarning(_, TYPES.removed, `all '${color}' tokens have been removed, reference ${CSS_DOCS_URL} for a suitable replacement`)],
  // removed semantic color tokens without s-prefix
  [/^.*(--w-decoration-link)[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the '${token}' token has been removed`)],
  [/^.*--w-(color-background)(-subtle|)[^a-z-]*$/, ([_, token, tokenSuffix]) => emitWarning(_, TYPES.removed, `the '--w-${token}${tokenSuffix}' token has been removed. If applicable, use the 's-bg${tokenSuffix}' semantic class (or simply replace it with the equivalent semantic token '--w-s-${token}${tokenSuffix}')`)],
  [/^.*(--w-color-background-interactive(-subtle|-hover|))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the '${token}' token has been removed`)],
  [/^.*--w-(color-text)(-subtle|-placeholder|-inverted(-subtle)*|-link|)[^a-z-]*$/, ([_, token, tokenSuffix]) => emitWarning(_, TYPES.removed, `the '--w-${token}${tokenSuffix}' token has been removed. If applicable, use the 's-text${tokenSuffix}' semantic class (or simply replace it with the equivalent semantic token '--w-s-${token}${tokenSuffix}')`)],
  [/^.*(--w-color-text-link(-hover|-visited))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the '${token}' token has been removed`)],
  // removed semantic color tokens
  [/^.*(--w-s-color-background-(positive|negative|warning|info)-selected(-hover|-active)?)[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the '${token}' semantic token has been removed`)],
  [/^.*(--w-s-color-border-negative-selected(-hover)?)[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the '${token}' semantic token has been removed`)],
  // replaced semantic color tokens
  [/^.*(--w(-s)?-color-focused)[^a-z-].*$/, ([_, token]) => emitWarning(_, TYPES.replaced, `the '${token}' token has been replaced with '--w-s-border-focused'`)],
  [/^.*(--w-s-color-background(-subtle|-primary|-positive|-negative|-warning|-info|))-default[^a-z-].*$/, ([_, token]) => emitWarning(_, TYPES.replaced, `the '${token}-default' token has been replaced with '${token}'`)],
  [/^.*(--w-s-color-border((-primary|-positive|-negative|-warning|-info)(-subtle)?)?)-default[^a-z-].*$/, ([_, token]) => emitWarning(_, TYPES.replaced, `the '${token}-default' token has been replaced with '${token}'`)],
  [/^.*(--w-s-color-(text|icon(-subtle)?))-default[^a-z-].*$/, ([_, token]) => emitWarning(_, TYPES.replaced, `the '${token}-default' token has been replaced with '${token}'`)],
  // removed component color tokens
  [/^.*(--w-color-(alert|box|breadcrumbs|broadcast|card|checkbox|combobox|datepicker|expandable|helptext|image|input|label|list|modal|pageindicator|pagination|popover|radio|select|slider|spinner|starrating|stepindicator|tabs|toast|tooltip)(-[a-z-]*)?)[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-badge-(neutral|info|positive|warning|negative|disabled|price|notification)-text)[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-badge-(price|notification)-background)[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-primary-(text|icon|border(-hover|-active|)))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-secondary-(text|icon|border(-hover|-active|)|background(-hover|-active|)))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-quiet-(text|icon|background(-hover|-active|)))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-negative(-quiet)?-(text|icon|border(-hover|-active|)|background(-hover|-active|)))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-disabled-(text|background))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-(button-link|callout)-text)[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-pill-(background|(overlay-)?icon(-hover|-active|)|))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-loading-(text|background|icon))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-button-utility(-quiet)?-(text|border(-hover|-active|)|background(-hover|-active|)))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-buttongroup-primary-(text(-selected)?|background(-hover|-selected)?|border(-selected)?))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-pill-(filter-(text|icon|background(-hover-|active|))|suggestion-(text|icon)))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  [/^.*(--w-color-switch-(track-background-(selected(-hover)?|disabled)|handle-background(-disabled)?))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
  // removed component shadow tokens
  [/^.*(--w-shadow-(buttongroup|card(-hover)?|combobox|modal|popover|switch-handle|tooltip))[^a-z-]*$/, ([_, token]) => emitWarning(_, TYPES.removed, `the Warp internal '${token}' component token has been removed`)],
]
