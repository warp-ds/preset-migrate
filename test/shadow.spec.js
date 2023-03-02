import { removePseudo, setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";
import { TYPES } from "../rules.js"

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
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value}`)
    })
  });


  test("Emits a warning if used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["lg:drop-shadow", "md:shadow-20", "!shadow-none", "active:shadow-40"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${removePseudo(value)}`)
    })
  });
})