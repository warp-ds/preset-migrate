import { describe, expect, test, vi } from "vitest";
import { setup } from "./_helpers.js";
import { TYPES } from "../rules.js"

setup();

describe('outline', () => {
    test('prints a warning for using deprecated outline classes', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['outline-black', 'outline-none','outline-white'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        classes.forEach((value) => {
            expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${value}`)
        })
    });
});
