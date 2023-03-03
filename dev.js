import { createGenerator } from '@unocss/core'
import { presetMigrate } from './index.js'
const uno = createGenerator({ presets: [presetMigrate()] })
const cliClasses = process.argv.slice(2)
const result = await uno.generate(cliClasses)
console.log(result.css)
