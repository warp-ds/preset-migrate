import { describe, expect, test, vi } from "vitest";
import { removePseudo, setup } from "./_helpers.js";
import { TYPES } from "../rules.js"


setup();

describe('semantic classes', () => {
    test('handles deprecated segment-control|field', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['field', 'field-hint', 'segment-control__item', 'segment-control--is-disabled','segment-control'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        classes.forEach((value) => {
            expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${value} -> use Warp components instead`)
          })        
    });
    test('handles deprecated segment-control|field with pseudo', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['sm:field', 'lg:segment-control__item'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        classes.forEach((value) => {
            expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${removePseudo(value)} -> use Warp components instead`);
        });   
    });
    test('handles deprecated link with a custom message with and without pseudo', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['link', 'sm:link'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchInlineSnapshot(`
          [
            "[REMOVED] link, link--dark and link--block -> use Warp components instead",
            "[REMOVED] link, link--dark and link--block -> use Warp components instead",
          ]
        `);     
    }); 
    test('handles deprecated button|input|f', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['button', 'button--default', 'button--secondary', 'input-toggle', 'input', 'input--is-invalid', 'f-modal-title-leave-to', 'f-slider', 'f-card-outline'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        classes.forEach((value) => {
            expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${removePseudo(value)} -> use Warp components instead`);
        });   
    });
    test('handles deprecated button|input|f with pseudo', async ({ uno }) => {
        const warnSpy = vi.spyOn(global.console, 'warn');
        const classes = ['md:button', 'lg:button--default', 'sm:button--secondary', 'md:input-toggle', 'sm:input', '!input--is-invalid', '!f-modal-title-leave-to', 'sm:f-slider', 'lg:f-card-outline'];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        classes.forEach((value) => {
            expect(warnSpy).toHaveBeenCalledWith(`${TYPES.removed} ${removePseudo(value)} -> use Warp components instead`);
        });   
    });
})
