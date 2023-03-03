import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";
import { colors, colorHues } from "../rules.js"

setup();

describe("colors", () => {
  test("Emits a warning if text class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `text-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if border class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `border-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if background class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `bg-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if divide class is used with a color", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = colors.map((color) =>{
      return colorHues.map(hue => `divide-${color}-${hue}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if 'text', 'bg', 'border' or 'divide' is used with 'current', 'transparent', 'none' or 'white'", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["current", "transparent", "none", "white"].map((color) =>{
      return ["text", "bg", "border", "divide"].map(el => `${el}-${color}`)
    }).flat()

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning for color classes with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["focus:text-blue-500", "active:divide-yellow-100", "sm:border-green-50", "!bg-yellow-400"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });
})