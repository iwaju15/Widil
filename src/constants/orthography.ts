import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'ą',
  'b',
  'c',
  'č',
  'd',
  'đ',
  'e',
  'ę',
  'f',
  'h',
  'd',
  'i',
  'į',
  'ɨ',
  'ɨ̨',
  'j',
  'ǰ',
  'k',
  'l',
  'ĺ',
  'ł',
  'ƛ',
  'm',
  'ḿ',
  'n',
  'ŋ',
  'o',
  'ǫ',
  'p',
  'q',
  'r',
  's',
  'š',
  't',
  'ŧ',
  'u',
  'ų',
  'v',
  'w',
  'x',
  'y',
  'xw',
  'y',
  'z',
  'ż',
  'ž',
  'ǀ',
  'ʘ',
  '!',
  "'",
  ':',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
