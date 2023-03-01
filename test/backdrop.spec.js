import { describe, expect, test } from "vitest";
import { setup } from "./_helpers.js";


setup();

describe('backdrop',  () => {
    test('', async ({ uno }) => {
        const test = ['backdrop-test'];
        const { css } = await uno.generate(test);
        expect(css).toMatchSnapshot();
    });
});
