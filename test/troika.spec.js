import { expect, test, vi } from "vitest";
import { setup } from "./_helpers.js";
import { TYPES } from "../rules.js"

setup();

test('prints a warning for using deprecated container and t-*', async ({ uno }) => {
    const warnSpy = vi.spyOn(global.console, 'warn');
    const classes = ['container', 'sm:container', 't-grid','t'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(3);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REMOVED] container",
        "[REMOVED] container",
        "[REMOVED] t-grid",
      ]
    `);
});
