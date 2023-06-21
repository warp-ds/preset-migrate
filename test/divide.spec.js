import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("divide", () => {
  test("Emits a warning if used with 'dotted', 'solid', 'double' or 'dashed'", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["divide-dotted", "divide-solid", "divide-double", "divide-dashed"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "\x1b[91m[REMOVED]\x1b[0m divide-dotted",
        "\x1b[91m[REMOVED]\x1b[0m divide-solid",
        "\x1b[91m[REMOVED]\x1b[0m divide-double",
        "\x1b[91m[REMOVED]\x1b[0m divide-dashed",
      ]
    `);
  });


  test("Emits a warning if used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["lg:divide-dotted", "md:divide-solid", "!divide-double", "sm:divide-dashed"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "\x1b[91m[REMOVED]\x1b[0m divide-dotted",
        "\x1b[91m[REMOVED]\x1b[0m divide-solid",
        "\x1b[91m[REMOVED]\x1b[0m divide-double",
        "\x1b[91m[REMOVED]\x1b[0m divide-dashed",
      ]
    `);
  });
})