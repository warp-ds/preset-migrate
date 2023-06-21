import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();

describe("decoration", () => {
  test("Emits a warning if used with 'slice', 'none' or 'clone'", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["decoration-slice", "decoration-none", "decoration-clone"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "\x1b[91m[REMOVED]\x1b[0m decoration-slice",
        "\x1b[91m[REMOVED]\x1b[0m decoration-none",
        "\x1b[91m[REMOVED]\x1b[0m decoration-clone",
      ]
    `);
  });


  test("Emits a warning if used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:decoration-slice", "active:decoration-none", "!decoration-clone"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "\x1b[91m[REMOVED]\x1b[0m decoration-slice",
        "\x1b[91m[REMOVED]\x1b[0m decoration-none",
        "\x1b[91m[REMOVED]\x1b[0m decoration-clone",
      ]
    `);
  });
})