import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("deprecated warp classes", () => {
  test("Emits a warning if semantic color classes used with -default suffix are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      's-color-background-default',
      's-color-background-subtle-default',
      's-color-background-primary-default',
      's-color-background-positive-default',
      's-color-background-negative-default',
      's-color-background-warning-default',
      's-color-background-info-default',
      's-color-border-default',
      's-color-border-primary-default',
      's-color-border-primary-subtle-default',
      's-color-border-positive-default',
      's-color-border-positive-subtle-default',
      's-color-border-negative-default',
      's-color-border-negative-subtle-default',
      's-color-border-warning-default',
      's-color-border-warning-subtle-default',
      's-color-border-info-default',
      's-color-border-info-subtle-default',
      's-color-icon-default',
      's-color-icon-subtle-default',
      's-color-text-default'
    ]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if color classes without s- suffix are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
    'color-focused',
    'color-background',
    'color-background-subtle',
    'color-background-interactive',
    'color-background-interactive-hover',
    'color-background-interactive-selected',
    'color-text',
    'color-text-subtle',
    'color-text-placeholder',
    'color-text-inverted',
    'color-text-inverted-subtle',
    'color-text-link',
    'color-text-link-hover',
    'color-text-link-visited',]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });
})