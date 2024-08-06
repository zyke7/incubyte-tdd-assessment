function add(numbers) {
  if (numbers === "")
    return 0;
  const delimiter = /[\n,]/;
  const arr = numbers
    .split(delimiter)
    .map(num => parseInt(num.trim()));
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

module.exports = add;