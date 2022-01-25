export function removeRepeatingDelimiters(string) {
  return string
    .replace(/\s+/g, ' ')
    .replace(/,+/g, ',')
}
