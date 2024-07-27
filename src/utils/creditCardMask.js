export function insertMaskInCreditCard(number) {
  return number
    .replace(/\D/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
}
