function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== 'number' || tokensUsed < 0) {
    return 'Invalid';
  }
  let remainingTokens = tokensUsed - 500;
  if (remainingTokens <= 0) {
    return 0;
  }
  let tokenBlocks = Math.floor(remainingTokens / 100);
  let totalCost = tokenBlocks * 5;
  return totalCost;
}

console.log('Output is:', calculateAiCost(300));
console.log('Output is:', calculateAiCost(500));
console.log('Output is:', calculateAiCost(650));
console.log('Output is:', calculateAiCost(1000));
console.log('Output is:', calculateAiCost(-10));
console.log('Output is:', calculateAiCost('5'));
