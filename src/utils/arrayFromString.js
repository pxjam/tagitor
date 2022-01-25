import { removeRepeatingDelimiters } from './removeRepeats.js'

export function arrayFromString(string) {
  return removeRepeatingDelimiters(string)
    .split(', ')
    .map(i => i.trim())
    .filter(i => i !== '')
}
