export const getTaxRate = ({ annualIncome }) => {
  let taxRate = "";
  switch (annualIncome) {
    case "0":
      taxRate = "0%";
      break;
    case "18":
      taxRate = "Nil + 19% of excess over $18,200";
      break;
    case "45":
      taxRate = "$5092 + 32.5% of excess over $45,000";
      break;
    case "120":
      taxRate = "$29,467 + 37% of excess over $120,000";
      break;
    case "180":
      taxRate = "$51,667 + 45% of excess over $180,000";
      break;
    default:
      break;
  }

  return taxRate;
};
