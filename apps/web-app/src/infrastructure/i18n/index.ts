import { DEFAULT_DICTIONARY, DEFAULT_LOCALE, type TranslateKey, type TranslateOptions } from '@/domain/i18n'

import Polyglot from './polyglot'

const polyglot = new Polyglot({ locale: DEFAULT_LOCALE, phrases: DEFAULT_DICTIONARY })

export const i18n = (key: TranslateKey, options?: TranslateOptions) => polyglot.t(key, options)
