import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("flex", () => {
  test("Emits a warning if flex-shrink, flex-grow, flex-shrink-0 or flex-grow-0 is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["flex-shrink", "flex-shrink-0", "flex-grow", "flex-grow-0"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[91m[REPLACED][0m flex-shrink -> use shrink",
        "[91m[REPLACED][0m flex-shrink-0 -> use shrink-0",
        "[91m[REPLACED][0m flex-grow -> use grow",
        "[91m[REPLACED][0m flex-grow-0 -> use grow-0",
      ]
    `);
  });

  test("Emits a warning if flex-shrink, flex-grow, flex-shrink-0 or flex-grow-0 is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:flex-shrink", "lg:flex-shrink-0", "sm:flex-grow", "!flex-grow-0"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[91m[REPLACED][0m flex-shrink -> use shrink",
        "[91m[REPLACED][0m flex-shrink-0 -> use shrink-0",
        "[91m[REPLACED][0m flex-grow -> use grow",
        "[91m[REPLACED][0m flex-grow-0 -> use grow-0",
      ]
    `);
  });
})