export function pluralizeAmountPL(forms, value) {
  const rounded = Math.abs(Math.round(value * 100) / 100);
  if (rounded === 1) return forms[1];
  if (rounded === 0) return forms[3];
  if (rounded !== Math.round(rounded)) return forms[0];
  if (rounded % 100 >= 10 && rounded % 100 < 20) return forms[3];
  if (rounded % 10 >= 2 && rounded % 10 <= 4) return forms[2];
  return forms[3];
}

export function getBaseUnitFormsPL(baseUnit) {
  if (baseUnit === "g") return ["g", "g", "g", "g"];
  else if (baseUnit === "ml") return ["ml", "ml", "ml", "ml"];

  throw new Error(`Unknown base unit: ${baseUnit}`);
}