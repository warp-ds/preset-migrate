import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("text", () => {
  test("Emits a warning if used with numbers", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["text-14", "text-24", "text-36"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REPLACED] text-14",
        "[REPLACED] text-24",
        "[REPLACED] text-36",
      ]
    `);
  });

  test("Emits a warning if used with numbers", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["text-primary", "text-secondary", "text-danger"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REPLACED] text-primary",
        "[REPLACED] text-secondary",
        "[REPLACED] text-danger",
      ]
    `);
  });

  test("Emits a warning if used with 'primary', 'secondary' or 'danger'", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:text-primary", "active:text-secondary", "!text-danger"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REPLACED] text-primary",
        "[REPLACED] text-secondary",
        "[REPLACED] text-danger",
      ]
    `);
  });
})