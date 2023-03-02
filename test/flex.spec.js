import { removePseudo, setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";
import { TYPES } from "../rules.js"

setup();


describe("flex", () => {
  test("Emits a warning if flex-shrink, flex-grow, flex-shrink-0 or flex-grow-0 is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["flex-shrink", "flex-shrink-0", "flex-grow", "flex-grow-0"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value} -> use ${value.replace("flex-", "")}`)
    })
  });

  test("Emits a warning if flex-shrink, flex-grow, flex-shrink-0 or flex-grow-0 is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:flex-shrink", "lg:flex-shrink-0", "sm:flex-grow", "!flex-grow-0"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      const classWithoutPseudo = removePseudo(value)
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${classWithoutPseudo} -> use ${classWithoutPseudo.replace("flex-", "")}`)
    })
  });
})