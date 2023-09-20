import { describe, expect, test, vi, beforeEach } from "vitest";
import { setup } from "./_helpers.js";
import { TYPES } from "../utils.js"

setup();

const filterHues = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200];
const filterTypes = ['brightness', 'contrast', 'hue-rotate', 'saturate'];
const opacityHues= [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
const blurDimensions = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];


describe('filter',  () => {
    let warnSpy;
    beforeEach(() => {
        warnSpy = vi.spyOn(global.console, 'warn');
    });

    test('prints a warning for using deprecated filters with static values', async ({ uno }) => {
        const classes = [
            'backdrop-filter',
            'backdrop-filter-none',
            'backdrop-invert-0',
            'invert-0',
            'backdrop-sepia-0',
            'sepia-0',
        ];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchSnapshot();  
    });

    test('prints a warning for using deprecated filters brightness|contrast|hue-rotate|saturate', async ({ uno }) => {
        const classes = [...filterTypes.flatMap(t => filterHues.flatMap((v) => [`backdrop-${t}-${v}`, `${t}-${v}`]))];
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchSnapshot();  
    });

    test('prints a warning for using deprecated backdrop opacity filter', async ({ uno }) => {
        const classes = opacityHues.map(o => `backdrop-opacity-${o}`);
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchSnapshot();  
    });

    test('prints a warning for using deprecated blur filter', async ({ uno }) => {
        const classes = blurDimensions.map(o => `blur-${o}`);
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length);
        expect(warnSpy.calls.flat()).toMatchSnapshot();  
    });

    test('prints a warning for using deprecated backdrop-blur filter', async ({ uno }) => {
        const classes = blurDimensions.map(o => `backdrop-blur-${o}`);
        const { css } = await uno.generate(classes);
        expect(css).toMatchInlineSnapshot('""');
        expect(warnSpy).toHaveBeenCalledTimes(classes.length-1);
        expect(warnSpy.calls.flat()).toMatchSnapshot();
    });
});
