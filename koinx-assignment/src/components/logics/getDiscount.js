export const getDiscount = ({ investmentType, capitalGain }) => {
  let discount = 0;
  if (investmentType === "Lt") {
    if (capitalGain > 0) {
      discount = capitalGain / 2;
    }
  }

  return discount;
};
