import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("aspect", () => {
  test("Emits a warning if aspect-w- or aspect-h- is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["aspect-w-2", "aspect-h-4"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REPLACED] aspect-w-2 -> use fractions instead, e.g. aspect-4/3",
        "[REPLACED] aspect-h-4 -> use fractions instead, e.g. aspect-4/3",
      ]
    `);
  });

  test("Emits a warning if aspect-w- or aspect-h- is used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:aspect-w-8", "lg:aspect-h-3"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REPLACED] aspect-w-8 -> use fractions instead, e.g. aspect-4/3",
        "[REPLACED] aspect-h-3 -> use fractions instead, e.g. aspect-4/3",
      ]
    `);
  });

  test("Emits a warning if aspect-none is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["aspect-none"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REMOVED] aspect-none",
      ]
    `);
  });

  test("Emits a warning if aspect-none used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:aspect-none", "lg:aspect-none"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REMOVED] aspect-none",
        "[REMOVED] aspect-none",
      ]
    `);
  });

})