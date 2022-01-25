export function arrayUnique(arr) {
  return arr.filter((el, idx, arr) => arr.indexOf(el) === idx)
}
