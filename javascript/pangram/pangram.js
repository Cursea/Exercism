export const isPangram = (string) => {
  /*if (!string) {
    return false
  }*/

  const reg = /[A-Z]+/g
  let capsOnly = string.toUpperCase().match(reg).join('')
  let chars = []

  for (let i = 0; i < capsOnly.length; i++) {
    chars.push(capsOnly.charCodeAt(i))
  }

  let unique = Array.from(new Set(chars)).sort()

  for (let i = 0, j = 65; j < 90; i++, j++) {
    if (unique[i] !== j) {
      return false
    }
  }

  return true
}
