import { expect, test, vi } from "vitest";
import { setup } from "./_helpers.js";

setup();

test('prints a warning for using deprecated container and t-*', async ({ uno }) => {
    const warnSpy = vi.spyOn(global.console, 'warn');
    const classes = ['container', 't-grid'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(2);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REMOVED] container",
        "[REMOVED] t-grid",
      ]
    `);
});
test('prints NO warning for using non deprecated t', async ({ uno }) => {
    const warnSpy = vi.spyOn(global.console, 'warn');
    const classes = ['t'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot('[]');
});

test('prints a warning for using deprecated container with pseudo', async ({ uno }) => {
    const warnSpy = vi.spyOn(global.console, 'warn');
    const classes = ['md:container', 'md:t-grid'];
    const { css } = await uno.generate(classes);
    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(2);
    expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
      [
        "[REMOVED] container",
        "[REMOVED] t-grid",
      ]
    `);
});
