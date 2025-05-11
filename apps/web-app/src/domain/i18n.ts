import { dictionaries } from '@/infrastructure/i18n/dictionaries'
import { type DotNestedKeys, getObjectKeys } from '@/infrastructure/utils'

export const SUPPORTED_LOCALES = getObjectKeys(dictionaries)

export type Locale = typeof SUPPORTED_LOCALES[number]
export type Dictionary = typeof dictionaries[Locale]

export const DEFAULT_LOCALE: Locale = 'fr'
export const DEFAULT_DICTIONARY: Dictionary = dictionaries[DEFAULT_LOCALE]

export type TranslateKey = DotNestedKeys<Dictionary>
export type TranslateOptions = Record<string, string | number> | number
