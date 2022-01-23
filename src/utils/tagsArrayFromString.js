import { removeRepeatingDelimiters } from './removeRepeats.js'

export const tagsArrayFromString = (string) => string
  .split(', ')
  .map(i => removeRepeatingDelimiters(i).trim())
  .filter(i => i !== '')
