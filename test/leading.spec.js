import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("leading", () => {
  test("Emits a warning if used with numbers", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["leading-1", "leading-12", "leading-14", "leading-16", "leading-20", "leading-24", "leading-36"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if used with pseudo", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:text-primary", "active:text-secondary", "!text-danger"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });
})