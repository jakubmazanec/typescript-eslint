// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// RUN THE FOLLOWING COMMAND FROM THE WORKSPACE ROOT TO REGENERATE:
// npx nx generate-lib repo

import type { ImplicitLibVariableOptions } from '../variable';

import { TYPE } from './base-config';
import { es2015_iterable } from './es2015.iterable';
import { es2015_symbol } from './es2015.symbol';

export const es2020_symbol_wellknown = {
  ...es2015_iterable,
  ...es2015_symbol,
  RegExp: TYPE,
  RegExpStringIterator: TYPE,
  SymbolConstructor: TYPE,
} as Record<string, ImplicitLibVariableOptions>;
