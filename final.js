// Problem 1 — Match Winner

function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number') {
    return 'Invalid';
  }
  if (teamAGoals > teamBGoals) {
    return 'Team A Won';
  }
  if (teamBGoals > teamAGoals) {
    return 'Team B Won';
  }
  return 'Draw';
}

// Problem 2 — Elevator Weight Safety Checker

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
