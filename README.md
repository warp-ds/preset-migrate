# Warp DS Migrate plugin - a UnoCSS preset

This plugin can be useful when migrating from Fabric to Warp Design System.
It will detect all deprecated CSS utility classes and print warnings with useful hints in the terminal.

## Use in the application

### Install the plugin

This UnoCSS preset is available via NPM.

```shell
npm install -D @warp-ds/migrate
```

### Add the plugin to your Uno config

```js
import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { presetMigrate } from '@warp-ds/migrate';

export default defineConfig({
  presets: [
    presetMigrate(),
    presetWarp()
  ]
});
```

## Use through command line

You can also check if a CSS utility class is deprecated using the `pnpm dev` (or `node index.js`) command in your terminal.

_Example_
```shell
pnpm dev last-child:mb-0
```

_This example prints the following output:_
```shell
[REPLACED] last-child:mb-0 -> use last:mb-0
```