function sumArray(numbers) {
  return numbers.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
}
