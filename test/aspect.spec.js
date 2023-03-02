import { removePseudo, setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";
import { TYPES } from "../rules.js"

setup();


describe("aspect", () => {
  test("Emits a warning if aspect-w or aspect-h is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["aspect-w", "aspect-h"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value} -> use e.g. aspect-1/1`)
    })
  });

  test("Emits a warning if aspect-w or aspect-h is used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:aspect-w", "lg:aspect-h"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${removePseudo(value)} -> use e.g. aspect-1/1`)
    })
  });

  test("Emits a warning if aspect-none is used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["aspect-none"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${value}`)
    })
  });

  test("Emits a warning if aspect-none used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:aspect-none", "lg:aspect-none"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${removePseudo(value)}`)
    })
  });

})