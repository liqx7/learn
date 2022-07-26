export const getRandom = (a, b) => {
  let max = a > b ? a : b;
  let min = max === a ? b : a;

  return parseInt(Math.random() * (max - min)) + min;
};
