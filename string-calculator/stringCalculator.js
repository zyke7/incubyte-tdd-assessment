function add(numbers) {
  if (numbers === "")
    return 0;
  
  let delimiter = /[\n,]/;

  if(numbers.startsWith('//')) {
    delimiter = numbers.match(/\/\/(.+?)\n/)[1];
    numbers = numbers.split(/\n/)[1];
  }
  
  const arr = numbers
    .split(delimiter)
    .map(num => parseInt(num.trim()));
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

module.exports = add;