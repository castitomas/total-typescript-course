const func = () => {
  // Refactor this to be its own function
  const randomPercentage = `${getRandomNumber()}%`;
  console.log(randomPercentage);
};
function getRandomNumber() {
  return (Math.random() * 100).toFixed(2);
}

