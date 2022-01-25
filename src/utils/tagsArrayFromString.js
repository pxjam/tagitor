import { removeRepeatingDelimiters } from './removeRepeats.js'

export function tagsArrayFromString(string) {
  return string
    .split(', ')
    .map(i => removeRepeatingDelimiters(i).trim())
    .filter(i => i !== '')
}
