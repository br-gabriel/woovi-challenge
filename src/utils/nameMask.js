export function insertMaskInName(name) {
  return name.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, "");
}
