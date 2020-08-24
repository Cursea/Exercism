import { resistorList } from './resistor-list'

export const decodedValue = (arr) => {
  const firstValue = resistorList.findIndex(color => color.name.toUpperCase() === arr[0].toUpperCase())
  const secondValue = resistorList.findIndex(color => color.name.toUpperCase() === arr[1].toUpperCase())

  return Number(`${firstValue}${secondValue}`)
};
