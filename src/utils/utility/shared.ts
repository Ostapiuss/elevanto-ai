export function getFirstLetter(text: string): string {
  return text.trim().charAt(0);
}

export function capitalizeFirstLetter(str: string | undefined): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
