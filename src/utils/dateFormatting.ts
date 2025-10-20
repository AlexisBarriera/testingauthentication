export const capitalizeDate = (dateStr: string): string => {
  const smallWords = ['de', 'del', 'la', 'el', 'y'];
  return dateStr
    .split(' ')
    .map((word, index) => {
      if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
      if (smallWords.includes(word.toLowerCase())) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
