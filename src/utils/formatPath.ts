// Formats the path of the news article [www.example.com/creates-this-path]
function formatPath(title: string): string {
  const formattedTitle = title.trim().toLowerCase().replace(/\s+/g, '-');
  return formattedTitle.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export default formatPath
