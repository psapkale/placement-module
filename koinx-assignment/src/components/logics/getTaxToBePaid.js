export const getTaxToBePaid = ({ netCapitalGain, annualIncome }) => {
  let taxToBePaid = "";
  switch (annualIncome) {
    case "0":
      taxToBePaid = 0;
      break;
    case "18":
      taxToBePaid = 0.19 * netCapitalGain;
      break;
    case "45":
      taxToBePaid = 0.325 * netCapitalGain;
      break;
    case "120":
      taxToBePaid = 0.37 * netCapitalGain;
      break;
    case "180":
      taxToBePaid = 45 * netCapitalGain;
      break;
    default:
      break;
  }

  return taxToBePaid;
};
