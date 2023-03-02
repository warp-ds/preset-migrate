import { removePseudo, setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";
import { TYPES } from "../rules.js"

setup();


describe("divide", () => {
  test("Emits a warning if used with 'dotted', 'solid', 'double' or 'dashed'", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["divide-dotted", "divide-solid", "divide-double", "divide-dashed"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${value}`)
    })
  });


  test("Emits a warning if used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["lg:divide-dotted", "md:divide-solid", "!divide-double", "sm:divide-dashed"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${removePseudo(value)}`)
    })
  });
})