function add(numbers) {
  if (numbers === "")
    return 0;

  let delimiter = /[\n,]/;

  if (numbers.startsWith('//')) {
    const delimiterChar = numbers.match(/\/\/(.+?)\n/)[1];
    delimiter = new RegExp(delimiterChar);
    numbers = numbers.split(/\n/)[1];
  }

  const arr = numbers
  .split(delimiter)
  .map(num => parseInt(num.trim()));
  
  const negativeNumbers = arr.filter(num => num < 0);
  if (negativeNumbers.length)
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(',')}`)
  
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

module.exports = add;