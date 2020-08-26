export const toRna = (dnaSequence) => {
  const dnaToRnaTranslation = x => 
    x === 'A' ? 'U' : x === 'C' ? 'G' : x === 'G' ? 'C' : x === 'T' ? 'A' : ''

  const rnaSequence = dnaSequence.split('').map(dnaToRnaTranslation).join('')
  
  return rnaSequence
};