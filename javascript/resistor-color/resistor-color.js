export const colorList = [
  { name: 'Black', code: 0 },
  { name: 'Brown', code: 1 },
  { name: 'Red', code: 2 },
  { name: 'Orange', code: 3 },
  { name: 'Yellow', code: 4 },
  { name: 'Green', code: 5 },
  { name: 'Blue', code: 6 },
  { name: 'Violet', code: 7 },
  { name: 'Grey', code: 8 },
  { name: 'White', code: 9 },
]

export const colorCode = (resistorColor) => {
  return colorList.findIndex(color => 
    color.name.toUpperCase() === resistorColor.toUpperCase())
}

export const COLORS = colorList.map(x => x.name.toLowerCase())