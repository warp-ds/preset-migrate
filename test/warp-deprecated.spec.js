import { setup } from "./_helpers.js";
import { describe, expect, test, vi } from "vitest";

setup();


describe("deprecated warp classes", () => {
  test("Emits a warning if semantic color classes used with -default suffix are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      's-bg-default',
      's-bg-subtle-default',
      's-bg-primary-default',
      's-bg-positive-default',
      's-bg-negative-default',
      's-bg-warning-default',
      's-bg-info-default',
      's-border-default',
      's-border-primary-default',
      's-border-primary-subtle-default',
      's-border-positive-default',
      's-border-positive-subtle-default',
      's-border-negative-default',
      's-border-negative-subtle-default',
      's-border-warning-default',
      's-border-warning-subtle-default',
      's-border-info-default',
      's-border-info-subtle-default',
      's-icon-default',
      's-icon-subtle-default',
      's-text-default'
    ]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if semantic color classes used with -active-hover suffix are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      's-bg-active-hover',
      's-bg-subtle-active-hover',
      's-bg-primary-active-hover',
      's-bg-negative-active-hover',
      's-bg-positive-active-hover',
      's-bg-warning-active-hover',
      's-bg-info-active-hover',
      's-bg-info-subtle-active-hover',
      's-border-active-hover',
      's-border-subtle-active-hover',
      's-border-primary-active-hover',
      's-border-negative-active-hover',
      's-border-positive-active-hover',
      's-border-warning-active-hover',
      's-border-info-active-hover',
      's-border-info-subtle-active-hover',
      's-icon-active-hover',
      's-icon-subtle-active-hover'
    ]

    const { css } = await t.uno.generate(classes);

    expect(css).toMatchInlineSnapshot('""');
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if 's-text-link-hover' or 's-text-link-hover-active' are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      's-text-link-hover',
      's-text-link-hover-active',
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