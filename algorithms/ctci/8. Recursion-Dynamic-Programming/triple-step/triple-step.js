const tripleStep = num => {
  let steps = [1, 2, 3];
  let dp = [];
  dp[0] = 0;

  for (let i = 1; i <= num; i++) {
    if (i == 1) {
      dp[i] = 1;
      continue;
    }
    for (let j = 0; j < steps.length; j++) {
      if (i - steps[j] > 0) dp[i] += dp[i - j];
    }
  }
  return dp[num];
};

export default tripleStep;
