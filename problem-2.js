function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return 'Invalid';
  }
  let totalWeight = 0;
  for (let weight of weights) {
    totalWeight = totalWeight + weight;
  }
  if (totalWeight <= 400) {
    return true;
  } else {
    return false;
  }
}

console.log('Output is:', isElevatorSafe([60, 75, 50]));
console.log('Output is:', isElevatorSafe([90, 100, 95, 120]));
console.log('Outpur is:', isElevatorSafe([400]));
console.log('Output is:', isElevatorSafe('60,75,50'));
