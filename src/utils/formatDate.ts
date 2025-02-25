export default function formatDate(date: Date): string {
  const months = ['Saus', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rgp', 'Rgs', 'Spa', 'Lap', 'Gruo']
  const month = date.getMonth() as number

  return `${months[month]}. ${date.getDate()}, ${date.getFullYear()}`

}
