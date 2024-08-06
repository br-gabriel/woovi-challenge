export function insertMaskInName(name: string): string {
  return name.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
}
