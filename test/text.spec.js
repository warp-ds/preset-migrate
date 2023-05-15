import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("text", () => {
  test("Emits a warning if used with numbers", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["text-1", "text-12", "text-14", "text-16", "text-20", "text-24", "text-36"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if used with numbers", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["text-primary", "text-secondary", "text-danger"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if used with 'primary', 'secondary' or 'danger'", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = ["md:text-primary", "active:text-secondary", "!text-danger"]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });
})