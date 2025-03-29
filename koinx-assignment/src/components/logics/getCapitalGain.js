export const getCapitalGain = ({ costPrice, sellPrice, expense }) => {
  const capitalGain = sellPrice - costPrice - expense;

  return capitalGain;
};
