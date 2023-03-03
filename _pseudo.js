const PseudoClasses = Object.fromEntries([
  // pseudo elements part 1
  ['first-letter', '::first-letter'],
  ['first-line', '::first-line'],
  // location
  'any-link',
  'link',
  'visited',
  'target',
  ['open', '[open]'],
  // user action
  'hover',
  'active',
  'focus-visible',
  'focus-within',
  'focus',
  // input
  'autofill',
  'enabled',
  'disabled',
  'read-only',
  'read-write',
  'placeholder-shown',
  'default',
  'checked',
  'indeterminate',
  'valid',
  'invalid',
  'in-range',
  'out-of-range',
  'required',
  'optional',
  // tree-structural
  'root',
  'empty',
  ['even-of-type', ':nth-of-type(even)'],
  ['even', ':nth-child(even)'],
  ['odd-of-type', ':nth-of-type(odd)'],
  ['odd', ':nth-child(odd)'],
  'first-of-type',
  ['first', ':first-child'],
  'last-of-type',
  ['last', ':last-child'],
  'only-child',
  'only-of-type',
  // pseudo elements part 2
  ['before', '::before'],
  ['after', '::after'],
  ['marker', '::marker'],
  ['file', '::file-selector-button'],
].map(key => Array.isArray(key) ? key : [key, `:${key}`]));
// TODO - rip this out
const PseudoClassesColon = Object.fromEntries([
  ['backdrop', '::backdrop'],
].map(key => Array.isArray(key) ? key : [key, `:${key}`]));


const PseudoClassesAndElementsStr = Object.entries(PseudoClasses).map(([key]) => key).join('|');
const PseudoClassesAndElementsColonStr = Object.entries(PseudoClassesColon).map(([key]) => key).join('|');
const PseudoClassesAndElementsRE = new RegExp(`^(${PseudoClassesAndElementsStr})[:]`);
const PseudoClassesAndElementsColonRE = new RegExp(`^(${PseudoClassesAndElementsColonStr})[:]`);

export const variantPseudoClassesAndElements = {
  name: 'pseudo',
  match(input) {       
    const match = input.match(PseudoClassesAndElementsRE) || input.match(PseudoClassesAndElementsColonRE);
    if (match) {
      const pseudo = PseudoClasses[match[1]] || PseudoClassesColon[match[1]] || `:${match[1]}`;
      return {
        matcher: input.slice(match[0].length),
        handle: (input, next) => {
          const selectors = pseudo.startsWith('::')
            ? { pseudo: `${input.pseudo}${pseudo}`, }
            : { selector: `${input.selector}${pseudo}`, };
          return next({
            ...input,
            ...selectors,
            sort: sortValue(match[1]),
          });
        },
      };
    }
  },
  multiPass: true,
  autocomplete: `(${PseudoClassesAndElementsStr}):`,
};

