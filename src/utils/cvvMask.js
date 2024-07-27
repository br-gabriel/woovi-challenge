export function insertMaskInCVV(cvv) {
  return cvv.replace(/\D/g, "");
}
