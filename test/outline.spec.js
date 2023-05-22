import { describe, expect, test, vi } from "vitest";
import { setup } from "./_helpers.js";
import { TYPES } from "../utils.js"

setup();

describe('outline', () => {
    test('prints a warning for using deprecated outline classes', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['outline-black', 'outline-none','outline-white'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
          [
            "[REMOVED] outline-black",
            "[REMOVED] outline-none",
            "[REMOVED] outline-white",
          ]
        `);  
    });
});
