import { describe, expect, test, vi } from "vitest";
import { setup } from "./_helpers.js";
import { TYPES } from "../utils.js"

setup();

describe('outline', () => {
    test('prints a warning for using deprecated outline classes', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['outline-black', 'outline-white'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
          [
            "\x1b[91m[REMOVED]\x1b[0m outline-black",
            "\x1b[91m[REMOVED]\x1b[0m outline-white",
          ]
        `);  
    });
});
