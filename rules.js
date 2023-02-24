export default [
  [/bg-(blue|green)-(\d+)/, ([_, e]) => {
    console.warn(`[REPLACED] ${_}`)
  }],
  [/aspect-([wh])/, ([_, e]) => {
    console.warn(`[REPLACED] ${_} -> use e.g. aspect-1/1`)
  }],
  [/aspect-none/, ([_, e]) => {
    console.warn(`[REMOVED] ${_}`)
  }],
  [/^focus-ring/, ([_, e]) => {
    console.warn(`[REPLACED] ${_} -> use focusable`)
  }]
]
