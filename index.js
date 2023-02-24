import rules from './rules.js'

export const presetMigrate = () => {
  console.log("Read more about supported classes here: https://warp-ds.github.io/css-docs/")

  return { name: '@warp-ds/preset-migrate', rules }
} 
