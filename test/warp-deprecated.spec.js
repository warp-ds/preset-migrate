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

  test("Emits a warning if semantic color tokens used with -default suffix are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const tokens = [
      '[var(--w-s-color-background-default)]',
      '[--w-s-color-background-default]',
      '[--w-s-color-background-subtle-default]',
      '[--w-s-color-background-primary-default]',
      '[--w-s-color-background-positive-default]',
      '[--w-s-color-background-negative-default]',
      '[--w-s-color-background-warning-default]',
      '[--w-s-color-background-info-default]',
      '[--w-s-color-border-default]',
      '[--w-s-color-border-primary-default]',
      '[--w-s-color-border-primary-subtle-default]',
      '[--w-s-color-border-positive-default]',
      '[--w-s-color-border-positive-subtle-default]',
      '[--w-s-color-border-negative-default]',
      '[--w-s-color-border-negative-subtle-default]',
      '[--w-s-color-border-warning-default]',
      '[--w-s-color-border-warning-subtle-default]',
      '[--w-s-color-border-info-default]',
      '[--w-s-color-border-info-subtle-default]',
      '[--w-s-color-icon-default]',
      '[--w-s-color-icon-subtle-default]',
      '[--w-s-color-text-default]',
    ]

    const { css } = await t.uno.generate(tokens);

    expect(css).toHaveLength(0);
    expect(warnSpy).toHaveBeenCalledTimes(tokens.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if Warp internal classes with an i-prefix are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      'active:i-bg-$color-button-negative-background-active',
      'active:i-bg-$color-button-negative-quiet-background-active',
      'active:i-bg-$color-button-pill-background-active',
      'active:i-bg-$color-button-primary-background-active',
      'active:i-bg-$color-button-quiet-background-active',
      'active:i-bg-$color-button-secondary-background-active',
      'active:i-bg-$color-card-flat-background-active',
      'active:i-bg-$color-pill-filter-background-active',
      'active:i-bg-$color-pill-suggestion-background-active',
      'active:i-bg-$color-slider-handle-background-active',
      'active:i-border-$color-button-utility-border-active',
      'active:i-border-$color-card-border-selected-active',
      'active:i-border-$color-card-flat-border-active',
      'active:i-border-$color-input-border-active',
      'active:i-border-$color-select-border-active',
      'active:i-border-$color-slider-handle-border-active',
      'active:i-text-$color-button-pill-icon-active',
      'active:i-text-$color-buttongroup-utility-text-selected',
      'active:i-text-$color-toast-close-icon-active',
      'before:i-bg-$color-checkbox-background-disabled',
      'before:i-bg-$color-checkbox-negative-background',
      'before:i-bg-$color-modal-backdrop-background',
      'before:i-bg-$color-radio-background-disabled',
      'before:i-bg-$color-radio-negative-background',
      'before:i-border-$color-checkbox-border-disabled',
      'before:i-border-$color-radio-border-disabled',
      'before:i-border-$color-radio-negative-border',
      'before:i-text-$color-checkbox-icon',
      'focus:i-bg-$color-slider-handle-background-hover',
      'focus:i-border-$color-slider-handle-border-hover',
      'group-hover:i-bg-$color-switch-track-background-hover',
      'group-hover:i-bg-$color-switch-track-background-selected-hover',
      'hover:before:i-bg-$color-checkbox-background-hover',
      'hover:before:i-bg-$color-checkbox-negative-background-hover',
      'hover:before:i-border-$color-checkbox-border-hover',
      'hover:before:i-border-$color-checkbox-negative-border-hover',
      'hover:i-bg-$color-box-bordered-background-hover',
      'hover:i-bg-$color-box-info-background-hover',
      'hover:i-bg-$color-box-neutral-background-hover',
      'hover:i-bg-$color-button-negative-background-hover',
      'hover:i-bg-$color-button-negative-quiet-background-hover',
      'hover:i-bg-$color-button-pill-background-hover',
      'hover:i-bg-$color-button-primary-background-hover',
      'hover:i-bg-$color-button-quiet-background-hover',
      'hover:i-bg-$color-button-secondary-background-hover',
      'hover:i-bg-$color-button-utility-quiet-background-hover',
      'hover:i-bg-$color-buttongroup-utility-background-hover',
      'hover:i-bg-$color-card-background-hover',
      'hover:i-bg-$color-card-background-selected-hover',
      'hover:i-bg-$color-card-flat-background-hover',
      'hover:i-bg-$color-card-flat-background-selected-hover',
      'hover:i-bg-$color-combobox-option-background-hover',
      'hover:i-bg-$color-combobox-option-background-selected-hover',
      'hover:i-bg-$color-expandable-background-hover',
      'hover:i-bg-$color-pageindicator-background-hover',
      'hover:i-bg-$color-pill-filter-background-hover',
      'hover:i-bg-$color-pill-suggestion-background-hover',
      'hover:i-bg-$color-slider-handle-background-hover',
      'hover:i-border-$color-box-bordered-border-hover',
      'hover:i-border-$color-button-secondary-border-hover',
      'hover:i-border-$color-button-utility-border-hover',
      'hover:i-border-$color-card-border-selected-hover',
      'hover:i-border-$color-card-flat-border-hover',
      'hover:i-border-$color-card-flat-border-selected-hover',
      'hover:i-border-$color-input-border-disabled!',
      'hover:i-border-$color-input-border-hover',
      'hover:i-border-$color-select-border-disabled!',
      'hover:i-border-$color-select-border-hover',
      'hover:i-border-$color-slider-handle-border-hover',
      'hover:i-border-$color-tabs-border-hover',
      'hover:i-shadow-$shadow-card-hover',
      'hover:i-text-$color-button-negative-text',
      'hover:i-text-$color-button-pill-icon-hover',
      'hover:i-text-$color-button-secondary-text',
      'hover:i-text-$color-tabs-text-hover',
      'hover:i-text-$color-toast-close-icon-hover',
      'i-bg-$color-alert-info-background',
      'i-bg-$color-alert-negative-background',
      'i-bg-$color-alert-positive-background',
      'i-bg-$color-alert-warning-background',
      'i-bg-$color-badge-disabled-background',
      'i-bg-$color-badge-info-background',
      'i-bg-$color-badge-negative-background',
      'i-bg-$color-badge-neutral-background',
      'i-bg-$color-badge-notification-background',
      'i-bg-$color-badge-positive-background',
      'i-bg-$color-badge-price-background',
      'i-bg-$color-badge-warning-background',
      'i-bg-$color-box-bordered-background',
      'i-bg-$color-box-info-background',
      'i-bg-$color-box-neutral-background',
      'i-bg-$color-button-disabled-background',
      'i-bg-$color-button-loading-background',
      'i-bg-$color-button-negative-background',
      'i-bg-$color-button-negative-quiet-background',
      'i-bg-$color-button-pill-background',
      'i-bg-$color-button-primary-background',
      'i-bg-$color-button-quiet-background',
      'i-bg-$color-button-secondary-background',
      'i-bg-$color-button-utility-background',
      'i-bg-$color-button-utility-quiet-background',
      'i-bg-$color-buttongroup-primary-background',
      'i-bg-$color-buttongroup-utility-background',
      'i-bg-$color-buttongroup-utility-background-selected!',
      'i-bg-$color-callout-background',
      'i-bg-$color-card-background-selected',
      'i-bg-$color-card-flat-background',
      'i-bg-$color-card-flat-background-selected',
      'i-bg-$color-combobox-background',
      'i-bg-$color-combobox-option-background-selected',
      'i-bg-$color-expandable-background',
      'i-bg-$color-input-background',
      'i-bg-$color-input-background-disabled',
      'i-bg-$color-modal-background',
      'i-bg-$color-pageindicator-background',
      'i-bg-$color-pageindicator-background-selected',
      'i-bg-$color-pill-filter-background',
      'i-bg-$color-pill-suggestion-background',
      'i-bg-$color-popover-background',
      'i-bg-$color-select-background',
      'i-bg-$color-select-background-disabled',
      'i-bg-$color-slider-handle-background',
      'i-bg-$color-slider-handle-background-disabled',
      'i-bg-$color-slider-track-background',
      'i-bg-$color-slider-track-background-active',
      'i-bg-$color-slider-track-background-disabled',
      'i-bg-$color-stepindicator-handle-background',
      'i-bg-$color-stepindicator-handle-background-active',
      'i-bg-$color-stepindicator-track-background',
      'i-bg-$color-stepindicator-track-background-active',
      'i-bg-$color-switch-handle-background',
      'i-bg-$color-switch-handle-background-disabled',
      'i-bg-$color-switch-track-background',
      'i-bg-$color-switch-track-background-disabled',
      'i-bg-$color-switch-track-background-selected',
      'i-bg-$color-toast-negative-background',
      'i-bg-$color-toast-positive-background',
      'i-bg-$color-toast-warning-background',
      'i-bg-$color-tooltip-background',
      'i-border-$color-alert-info-subtle-border',
      'i-border-$color-alert-negative-subtle-border',
      'i-border-$color-alert-positive-subtle-border',
      'i-border-$color-alert-warning-subtle-border',
      'i-border-$color-badge-disabled-background',
      'i-border-$color-badge-info-background',
      'i-border-$color-badge-negative-background',
      'i-border-$color-badge-neutral-background',
      'i-border-$color-badge-positive-background',
      'i-border-$color-badge-price-background',
      'i-border-$color-badge-warning-background',
      'i-border-$color-box-bordered-border',
      'i-border-$color-button-secondary-border',
      'i-border-$color-button-utility-border',
      'i-border-$color-buttongroup-primary-border',
      'i-border-$color-buttongroup-utility-border',
      'i-border-$color-buttongroup-utility-border-selected',
      'i-border-$color-callout-border',
      'i-border-$color-card-border',
      'i-border-$color-card-border-selected',
      'i-border-$color-card-flat-border',
      'i-border-$color-card-flat-border-selected',
      'i-border-$color-checkbox-border',
      'i-border-$color-input-border',
      'i-border-$color-input-border-disabled',
      'i-border-$color-input-border-negative',
      'i-border-$color-popover-background',
      'i-border-$color-radio-border',
      'i-border-$color-select-border',
      'i-border-$color-select-border-disabled',
      'i-border-$color-select-border-negative',
      'i-border-$color-slider-handle-border',
      'i-border-$color-stepindicator-handle-border',
      'i-border-$color-stepindicator-handle-border-active',
      'i-border-$color-tabs-border',
      'i-border-$color-tabs-border-selected',
      'i-border-$color-toast-negative-subtle-border',
      'i-border-$color-toast-positive-subtle-border',
      'i-border-$color-toast-warning-subtle-border',
      'i-border-$color-tooltip-background',
      'i-border-l-$color-alert-info-border',
      'i-border-l-$color-alert-negative-border',
      'i-border-l-$color-alert-positive-border',
      'i-border-l-$color-alert-warning-border',
      'i-shadow-$shadow-buttongroup',
      'i-shadow-$shadow-card',
      'i-shadow-$shadow-combobox',
      'i-shadow-$shadow-modal',
      'i-shadow-$shadow-slider',
      'i-shadow-$shadow-switch-handle',
      'i-shadow-$shadow-tooltip',
      'i-text-$color-alert-info-icon',
      'i-text-$color-alert-info-text',
      'i-text-$color-alert-negative-icon',
      'i-text-$color-alert-negative-text',
      'i-text-$color-alert-positive-icon',
      'i-text-$color-alert-positive-text',
      'i-text-$color-alert-warning-icon',
      'i-text-$color-alert-warning-text',
      'i-text-$color-badge-disabled-text',
      'i-text-$color-badge-info-text',
      'i-text-$color-badge-negative-text',
      'i-text-$color-badge-neutral-text',
      'i-text-$color-badge-notification-text',
      'i-text-$color-badge-positive-text',
      'i-text-$color-badge-price-text',
      'i-text-$color-badge-warning-text',
      'i-text-$color-box-bordered-text',
      'i-text-$color-box-info-text',
      'i-text-$color-box-neutral-text',
      'i-text-$color-breadcrumbs-icon',
      'i-text-$color-breadcrumbs-link-text',
      'i-text-$color-breadcrumbs-text',
      'i-text-$color-button-disabled-text',
      'i-text-$color-button-link-text',
      'i-text-$color-button-loading-text',
      'i-text-$color-button-negative-quiet-text',
      'i-text-$color-button-pill-icon',
      'i-text-$color-button-primary-text',
      'i-text-$color-button-quiet-text',
      'i-text-$color-button-utility-quiet-text',
      'i-text-$color-button-utility-text',
      'i-text-$color-buttongroup-primary-text',
      'i-text-$color-buttongroup-utility-text',
      'i-text-$color-callout-text',
      'i-text-$color-expandable-icon',
      'i-text-$color-expandable-title-text',
      'i-text-$color-helptext-text',
      'i-text-$color-helptext-text-negative',
      'i-text-$color-helptext-text-positive',
      'i-text-$color-input-text-disabled',
      'i-text-$color-input-text-filled',
      'i-text-$color-input-text-negative!',
      'i-text-$color-input-text-read-only',
      'i-text-$color-label-optional-text',
      'i-text-$color-label-text',
      'i-text-$color-label-text-negative',
      'i-text-$color-pill-filter-text',
      'i-text-$color-pill-suggestion-text',
      'i-text-$color-popover-paragraph-text',
      'i-text-$color-select-icon',
      'i-text-$color-select-text',
      'i-text-$color-select-text-disabled',
      'i-text-$color-stepindicator-handle-icon',
      'i-text-$color-tabs-text',
      'i-text-$color-tabs-text-selected',
      'i-text-$color-toast-close-icon',
      'i-text-$color-toast-negative-icon',
      'i-text-$color-toast-negative-text',
      'i-text-$color-toast-positive-icon',
      'i-text-$color-toast-positive-text',
      'i-text-$color-toast-warning-icon',
      'i-text-$color-toast-warning-text',
      'i-text-$color-tooltip-text',
      'peer-checked:before:i-bg-$color-checkbox-background-selected',
      'peer-checked:before:i-bg-$color-checkbox-background-selected-disabled',
      'peer-checked:before:i-bg-$color-checkbox-negative-background-selected',
      'peer-checked:before:i-border-$color-checkbox-border-selected-disabled',
      'peer-checked:before:i-border-$color-checkbox-negative-border',
      'peer-checked:before:i-border-$color-checkbox-negative-border-selected',
      'peer-checked:before:i-border-$color-radio-border-selected',
      'peer-checked:before:i-border-$color-radio-border-selected-disabled',
      'peer-checked:before:i-border-$color-radio-negative-border-selected',
      'peer-checked:i-bg-$color-buttongroup-primary-background-selected',
      'peer-checked:i-border-$color-buttongroup-primary-border-selected',
      'peer-checked:i-text-$color-buttongroup-primary-text-selected',
      'peer-checked:peer-hover:before:i-bg-$color-checkbox-background-selected-hover',
      'peer-checked:peer-hover:before:i-bg-$color-checkbox-negative-background-selected-hover',
      'peer-checked:peer-hover:before:i-border-$color-checkbox-border-selected-hover',
      'peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-selected-hover',
      'peer-checked:peer-hover:before:i-border-$color-radio-border-selected-hover',
      'peer-checked:peer-hover:before:i-border-$color-radio-negative-border-selected-hover',
      'peer-hover:before:i-bg-$color-radio-background-hover',
      'peer-hover:before:i-bg-$color-radio-negative-background-hover',
      'peer-hover:before:i-border-$color-radio-border-hover',
      'peer-hover:before:i-border-$color-radio-negative-border-hover',
      'peer-hover:peer-not-checked:i-bg-$color-buttongroup-primary-background-hover',
      'peer-indeterminate:before:i-border-$color-checkbox-border-selected',
    ];

    const { css } = await t.uno.generate(classes);

    expect(css).toHaveLength(0);
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if old tokens with alpha values are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      'bg-[--w-black-alpha25]',
      '[--w-blue-300-alpha30]',
      '[--w-blue-400-alpha30]',
      '[--w-blue-600-alpha50]',
      '[--w-blueberry-600-alpha50]',
      '[--w-gray-300-alpha30]',
      '[--w-gray-400-alpha30]',
      '[--w-gray-900-alpha70]',
      '[--w-black-alpha70]',
    ]

    const { css } = await t.uno.generate(classes);

    expect(css).toHaveLength(0);
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if removed primitive color tokens are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      'bg-[--w-bluegray-50]',
      '[--w-bluegray-50]',
      '[--w-bluegray-100]',
      '[--w-bluegray-300]',
      'bg-[--w-petroleum-50]',
      '[--w-petroleum-50]',
      '[--w-petroleum-100]',
      '[--w-petroleum-300]',
    ]

    const { css } = await t.uno.generate(classes);

    expect(css).toHaveLength(0);
    expect(warnSpy).toHaveBeenCalledTimes(classes.length);
    expect(warnSpy.calls.flat()).toMatchSnapshot();
  });

  test("Emits a warning if semantic 'focused' color classes are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      's-outline-focused',
      's-border-focused',
    ]

    const { css } = await t.uno.generate(classes);

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

  test("Emits a warning if old slider shadow classes are found", async (t) => {
    const warnSpy = vi.spyOn(global.console, 'warn')

    const classes = [
      'slider-handle-shadow-active',
      'slider-handle-shadow-hover',
      'active:slider-handle-shadow-active',
      'focus:slider-handle-shadow-hover',
      'hover:slider-handle-shadow-hover',
    ]

    const { css } = await t.uno.generate(classes);

//    expect(css).toHaveLength(0); // TODO: Re-enable this when Drive is updated with a version that has the slider shadow rule removed
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