export function renderGameStatistics(stats) {
  return `
    <div class="game-statistics">
      <div class="stats-section">
        <h3 class="stats-title">ROUND STATISTICS</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-label">Volume</span>
            <span class="stat-value">${stats.roundStats.totalVolume}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Avg Trade</span>
            <span class="stat-value">${stats.roundStats.averageTradeSize}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Elimination Rate</span>
            <span class="stat-value">${stats.roundStats.eliminationRate}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Survivors</span>
            <span class="stat-value">${stats.roundStats.survivorRatio}</span>
          </div>
        </div>
      </div>
      <div class="leaderboard-section">
        <h3 class="leaderboard-title">TOP SURVIVORS</h3>
        <div class="leaderboard-content">
          ${stats.leaderboard.map(player => `
            <div class="leaderboard-entry">
              <span class="position">#${player.position}</span>
              <span class="player">Player ${player.playerId}</span>
              <span class="profit">${player.profit}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}