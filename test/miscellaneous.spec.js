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
            'last-child:mb-0',
        ];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
          [
            "[REMOVED] transition-gpu -> use 'transform-gpu' or 'will-change-*'",
            "[REMOVED] fixed-ios-fix -> use 'transform translate-z-0'",
            "[REPLACED] focus-ring -> use focusable",
            "[REPLACED] last-child:mb-0 -> use last:mb-0",
          ]
        `);
    });
});
