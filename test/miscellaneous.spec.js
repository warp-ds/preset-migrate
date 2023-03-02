import { describe, expect, test, vi } from "vitest";
import { setup } from "./_helpers.js";
import { TYPES } from "../rules.js"

setup();


describe('miscellaneous', () => {
    test('prints a warning with correct message', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['transition-gpu','fixed-ios-fix'];
        const test = {
            'transition-gpu': `${TYPES.removed} transition-gpu -> use 'transform-gpu' or 'will-change-*'`,
            'fixed-ios-fix': `${TYPES.removed} fixed-ios-fix -> use 'transform translate-z-0'`,
        }
        const { css } = await uno.generate(Object.keys(test));
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy.calls.flat()).toEqual(Object.values(test));
    });
});
