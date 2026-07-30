//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number') {
    return 'Invalid';
  }
  if (teamAGoals > teamBGoals) {
    return 'Team A Won';
  }
  if (teamBGoals > teamAGoals) {
    return 'Team B Won';
  } else {
    return 'Draw';
  }
}

//Problem-02: Elevator Weight Safety Checker
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

//Problem-03: AI Token Cost Calculator
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

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return 'Invalid';
  }
  let best = restaurants[0];
  for (let data of restaurants) {
    if (data.rating > best.rating) {
      best = data;
    }
  }
  return best.name.toUpperCase();
}

//Problem-05: Debugging Challenge - API Response Time Monitor
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
