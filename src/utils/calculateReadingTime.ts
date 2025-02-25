// Strip content of HTML elements and calculate reading time, this is used when an user uploads a news post
export default function calculateReadingTime(content: string): number {
  const strippedContent = content.replace(/<[^>]*>/g, ' ');

  const wordCount = strippedContent
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0)
    .length;

  // 238 = average of words read in a minute
  return Math.max(1, Math.ceil(wordCount / 238));
}
