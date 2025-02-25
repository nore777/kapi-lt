export default function formatThousands(number: number): string {
  if (number < 1000) {
    return number.toString()
  }
  if (number < 1000000) {
    let temp = (number / 1000).toString()
    temp = temp.slice(0, temp.length - 2) + 'k'
    return temp
  }
  return number.toString()
}
