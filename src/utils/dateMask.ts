export function insertMaskInDate(date: string): string {
  return date.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
}
