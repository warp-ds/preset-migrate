import { describe, expect, test, vi } from "vitest";
import { setup } from "./_helpers.js";

setup();


describe('miscellaneous', () => {
    test('prints a warning with correct message', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = [
            'transition-gpu',
            'fixed-ios-fix',
            'focus-ring',
            'f-spinner',
        ];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
          [
            "\x1b[91m[REMOVED]\x1b[0m transition-gpu -> use 'transform-gpu' or 'will-change-*'",
            "\x1b[91m[REMOVED]\x1b[0m fixed-ios-fix -> use 'transform translate-z-0'",
            "\x1b[93m[REPLACED]\x1b[0m focus-ring -> use 'focusable'",
            "\x1b[91m[REMOVED]\x1b[0m f-spinner -> use 'animate-spinner' instead",
          ]
        `);
    });
});
