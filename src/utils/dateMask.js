export function insertMaskInDate(date) {
  return date.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2");
}
