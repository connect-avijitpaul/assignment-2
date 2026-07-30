function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
    return 'Invalid';
  }
  if (times.length === 0) {
    return 'Invalid';
  }
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== 'number') {
      return 'Invalid';
    }
  }
  let total = 0;
  for (let i = 0; i < times.length; i++) {
    total = total + times[i];
  }
  return total / times.length;
}

console.log('Output is:', averageResponseTime([120, 200, 150, 130]));
console.log('output is:', averageResponseTime([100, 100]));
console.log('output is:', averageResponseTime([]));
console.log('output is:', averageResponseTime('logs'));
console.log('output is:', averageResponseTime([120, '200', 150]));
