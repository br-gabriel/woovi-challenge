export function insertMaskInCVV(cvv: string): string {
  return cvv.replace(/\D/g, "");
}
