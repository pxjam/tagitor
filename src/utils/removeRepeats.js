export const removeRepeatingDelimiters = (string) => string
  .replace(/\s+/g, ' ')
  .replace(/,+/g, ',')
