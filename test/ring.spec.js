import { removePseudo, setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";
import { colors, TYPES } from "../rules.js"
import { colorHues } from "./color.spec.js";

setup();

const ringColorValues = colors.map((color) => {
  const colors = colorHues.map(hue => `${color}-${hue}`)
  const offsetColors = colors.map(color => `offset-${color}`)
  return [...colors, ...offsetColors]
}).flat()

const ringValues = [...ringColorValues, 0, 1, 2, 4, 8, "inset", "offset-transparent"]

describe("ring", () => {
  test("Emits a warning if ring classes are used", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ringValues.map((_,i) => `ring-${i}`)

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${value}`)
    })
  });


  test("Emits a warning if used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["lg:ring-2", "md:ring-8", "active:ring-inset", "active:ring-offset-transparent", "!ring-offset-yellow-400", "hover:ring-blue-500"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${removePseudo(value)}`)
    })
  });
})