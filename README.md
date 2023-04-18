# Warp DS Migrate plugin - a UnoCSS preset

This plugin can be useful when migrating from Fabric to Warp Design System.
It will detect all deprecated CSS utility classes and print warnings with useful hints in the terminal.

## Use in the application

### Install the plugin

This UnoCSS preset is available via NPM.

```shell
npm install -D @warp-ds/preset-migrate
```

### Add the plugin to your Uno config

```js
import { defineConfig } from 'unocss';
import { presetWarp } from '@warp-ds/uno';
import { presetMigrate } from '@warp-ds/preset-migrate';

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

## Releases

This project uses
[Semantic Release](https://github.com/semantic-release/semantic-release) to
automate package publishing when pushing changes to the `master` branch.

Follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
when making changes. The version published will depend on your commit message
structure. You can use [commitizen](https://github.com/commitizen/cz-cli) to help
follow this structure:

```
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to
commit your changes (replacing `git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)