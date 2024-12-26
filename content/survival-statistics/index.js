export const survivalStatistics = {
  globalStats: {
    totalPlayers: 456,
    activePlayers: 255,
    eliminatedPlayers: 201,
    averageSurvivalTime: "14.5 hours",
    peakEliminationRate: "45 players/hour"
  },
  phaseStats: [
    {
      phase: "Red Light Green Light",
      startingPlayers: 456,
      survivors: 255,
      eliminationCause: {
        timing: "45%",
        volatility: "30%",
        liquidation: "25%"
      }
    },
    {
      phase: "Honeycomb",
      startingPlayers: 255,
      survivors: 187,
      eliminationCause: {
        patternFailure: "60%",
        timeExpiry: "25%",
        voluntaryExit: "15%"
      }
    }
  ],
  projections: {
    estimatedFinalSurvivors: 1,
    projectedPrizePool: "₩45,600,000,000",
    expectedDuration: "72 hours"
  }
};