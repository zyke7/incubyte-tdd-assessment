function add(numString) {
  if (numString === "")
    return 0;

  let delimiter = /[\n,]/;

  if (numString.startsWith('//')) {
    const delimiterStr = numString.match(/\/\/(.+?)\n/)[1];
    delimiter = new RegExp(delimiterStr);
    numString = numString.split(/\n/)[1];
  }

  const numbers = numString
    .split(delimiter)
    .map(num => parseInt(num.trim()));

  const negativeNumbers = numbers.filter(num => num < 0);

  if (negativeNumbers.length)
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(',')}`);

  const filteredNumbers = numbers.filter(num => num < 1001);

  const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);

  return sum;
}

module.exports = add;