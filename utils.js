export const CSS_DOCS_URL = "https://warp-ds.github.io/css-docs"
export const TECH_DOCS_URL = "https://warp-ds.github.io/tech-docs"

export const TYPES = {
  replaced: "[REPLACED]",
  removed: "[REMOVED]"
}

const classMap = {
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
  spinner: "use w-spinner instead",
  grid: "",
  step: "use Warp steps component instead",
  switch: "use Warp switch component instead",
  tab: "use Warp tabs component instead",
  toast: "use Warp toast component instead",
  list: "use Warp list component instead",
  text: `check ${TECH_DOCS_URL}/font-size for supported classes`,
}

export const emitWarning = (selector, deprecationType, message) => {
  const className = Object.keys(classMap).find(key => selector.includes(key));
  const warningMessage = !message && className ? classMap[className] : message;
  console.warn(`${deprecationType} ${selector}${warningMessage ? " -> " + warningMessage : ""}`);
}

export const colors = ["blue", "green", "aqua", "yellow", "red", "bluegray", "gray"]
export const colorHues = Array.from({ length: 10 }, (_, index) => index === 0 ? 50 : index * 100); // 50, 100, 200, ..., 900

export const colorRegex = new RegExp("^(text|bg|border|divide)-(" + colors.join("|") + ")(-(\\d+))?$")