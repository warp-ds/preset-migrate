import { removePseudo, setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";
import { colors, TYPES } from "../rules.js"

setup();

const colorHues = Array.from({ length: 10 }, (_, index) => index === 0 ? 50 : index * 100); // 50, 100, 200, ..., 900

describe("colors", () => {
  test("Emits a warning if text class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `text-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value}`)
    })
  });

  test("Emits a warning if border class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `border-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value}`)
    })
  });

  test("Emits a warning if background class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `bg-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value}`)
    })
  });

  test("Emits a warning if divide class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `divide-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value}`)
    })
  });

  test("Emits a warning if 'text', 'bg', 'border' or 'divide' is used with 'current', 'transparent', 'none' or 'white'", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["current", "transparent", "none", "white"].map((color) =>{
      return ["text", "bg", "border", "divide"].map(el => `${el}-${color}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${value}`)
    })
  });

  test("Emits a warning for color classes with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["focus:text-blue-500", "active:divide-yellow-100", "sm:border-green-50", "!bg-yellow-400"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    classes.forEach((value) => {
      expect(warnSpy).toHaveBeenCalledWith(`${TYPES.replaced} ${removePseudo(value)}`)
    })
  });
})