function add(numbers) {
  if (numbers === "")
    return 0;
  const arr = numbers
    .split(',')
    .map(num => parseInt(num));
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

module.exports = add;