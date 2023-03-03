import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();

const shadowHues = [2, 3, 4, 10, 20, 30, 40, "none"]


describe("shadow", () => {
  test("Emits a warning if drop-shadow or shadow classes are used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const shadowClasses = shadowHues.map(el => `shadow-${el}`)
    const dropShadowClasses = shadowHues.map(el => `drop-shadow-${el}`)
    const classes = ["shadow", "drop-shadow", ...shadowClasses, ...dropShadowClasses]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REPLACED] shadow",
        "[REPLACED] drop-shadow",
        "[REPLACED] shadow-2",
        "[REPLACED] shadow-3",
        "[REPLACED] shadow-4",
        "[REPLACED] shadow-10",
        "[REPLACED] shadow-20",
        "[REPLACED] shadow-30",
        "[REPLACED] shadow-40",
        "[REPLACED] shadow-none",
        "[REPLACED] drop-shadow-2",
        "[REPLACED] drop-shadow-3",
        "[REPLACED] drop-shadow-4",
        "[REPLACED] drop-shadow-10",
        "[REPLACED] drop-shadow-20",
        "[REPLACED] drop-shadow-30",
        "[REPLACED] drop-shadow-40",
        "[REPLACED] drop-shadow-none",
      ]
    `);
  });


  test("Emits a warning if used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["lg:drop-shadow", "md:shadow-20", "!shadow-none", "active:shadow-40"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REPLACED] drop-shadow",
        "[REPLACED] shadow-20",
        "[REPLACED] shadow-none",
        "[REPLACED] shadow-40",
      ]
    `);
  });
})