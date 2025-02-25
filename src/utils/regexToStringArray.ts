export default function regexToStringArray(regex: RegExp, string: string) {
  const array: string[] = []
  let match
  while ((match = regex.exec(string)) !== null) {
    array.push(match[0].trim().toLowerCase())
  }
  return array
}
