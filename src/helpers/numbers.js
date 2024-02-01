import { parseUnits } from '@ethersproject/units';

export const increaseByPercent = (number, percent = 30) => {
  const onePercent = number.div(100);

  return number.add(onePercent.mul(percent));
};
export function toWei(value) {
  return parseUnits(String(value), 'ether');
}
