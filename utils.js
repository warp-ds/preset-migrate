export const CSS_DOCS_URL = "https://warp-ds.github.io/tech-docs/css";
export const TECH_DOCS_URL = "https://warp-ds.github.io/tech-docs";

export const CONSOLE_COLORS = {
  warn: "\x1b[93m",
  error: "\x1b[91m",
  pink: "\x1b[95m",
  bright: "\x1b[1m",
  reset: "\x1b[0m",
};

export const COLOR_MESSAGES = {
  background: `see ${CSS_DOCS_URL}/background-color to find suitable semantic replacement`,
  border: `see ${CSS_DOCS_URL}/border-color to find suitable semantic replacement`,
  divide: `see ${CSS_DOCS_URL}/divide-color to find suitable semantic replacement`,
  shadow: `see ${CSS_DOCS_URL}/box-shadow to find suitable semantic replacement`,
  text: `see ${CSS_DOCS_URL}/text-color to find suitable semantic replacement`,
};

export const TYPES = {
  replaced: "[REPLACED]",
  removed: "[REMOVED]",
  deprecated: "[DEPRECATED]",
};

const CLASS_MAP = {
  button: "use Warp button component instead",
  link: "use Warp button component instead",
  field: "use Warp form components instead",
  card: "use Warp card component instead",
  input: "use Warp input component instead",
  segment: "use Warp button-group (Vue) or Toggle component instead",
  expandable: "use Warp expandable component instead",
  modal: "use Warp modal component instead",
  slider: "use Warp slider component instead",
  thumb: "use Warp slider component instead",
  spinner: "use 'animate-spinner' instead",
  grid: "",
  step: "use Warp steps component instead",
  switch: "use Warp switch component instead",
  tab: "use Warp tabs component instead",
  toast: "use Warp toast component instead",
  list: "use Warp list component instead",
};

export const emitWarning = (selector, deprecationType, message) => {
  const className = Object.keys(CLASS_MAP).find(key => (new RegExp(`^(f-)?${key}`)).test(selector));
  const warningMessage = message ?? CLASS_MAP[className];
  console.warn(`${[TYPES.removed, TYPES.replaced].includes(deprecationType) ? CONSOLE_COLORS.error : CONSOLE_COLORS.warn}${deprecationType}${CONSOLE_COLORS.reset} ${selector}${warningMessage ? " -> " + warningMessage : ""}`);
};

export const colors = ["white", "black", "blue", "green", "aqua", "yellow", "red", "bluegray", "gray"];
export const colorHues = Array.from({ length: 10 }, (_, index) => index === 0 ? 50 : index * 100); // 50, 100, 200, ..., 900

export const COLOR_REGEXPS = {
  border: new RegExp("^border-(" + colors.join("|") + ")(-(\\d+))?$"),
  background: new RegExp("^bg-(" + colors.join("|") + ")(-(\\d+))?$"),
  text: new RegExp("^text-(" + colors.join("|") + ")(-(\\d+))?$"),
  divide: new RegExp("^divide-(" + colors.join("|") + ")(-(\\d+))?$"),
};
