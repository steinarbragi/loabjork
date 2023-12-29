export default function truncateWithEllipses(text: string, max: number) {
  return text.substring(0, max - 1) + (text.length > max ? '...' : '');
}
