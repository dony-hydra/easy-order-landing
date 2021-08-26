export const sumTotalPrice = (arr = []) => {
  let initialValue = 0;

  //   return 0;
  return parseFloat(
    arr.reduce(
      (total, currentValue) =>
        total + currentValue?.price * currentValue?.quantity,
      initialValue
    )
  ).toFixed(2);
};
