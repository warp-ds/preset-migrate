export default [
  [/bg-(blue|green)-(\d+)/, ([_, e]) => {
    console.warn(_, 'is deprecated, refer to https://some.website/deprecations for more information on replacement classes')
  }]
]
