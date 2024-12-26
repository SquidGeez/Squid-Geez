export function createGameStats({ volume, trades, eliminated, survivors }) {
  return `
    <div class="game-stats">
      <div class="stat-group">
        <div class="stat-item">
          <span class="stat-label">VOLUME</span>
          <span class="stat-value">${volume}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">TRADES</span>
          <span class="stat-value">${trades}</span>
        </div>
      </div>
      <div class="stat-group">
        <div class="stat-item">
          <span class="stat-label">ELIMINATED</span>
          <span class="stat-value">${eliminated}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">SURVIVORS</span>
          <span class="stat-value">${survivors}</span>
        </div>
      </div>
    </div>
  `;
}