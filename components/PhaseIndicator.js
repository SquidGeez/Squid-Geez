export function createPhaseIndicator({ phase, timeRemaining, totalPlayers, activePlayers }) {
  return `
    <div class="phase-indicator">
      <div class="phase-status">
        <div class="phase-light ${phase.toLowerCase().replace(' ', '-')}"></div>
        <span class="phase-name">${phase}</span>
      </div>
      <div class="phase-timer">${timeRemaining}</div>
      <div class="phase-stats">
        <div class="stat-item">
          <span class="stat-label">TOTAL PLAYERS</span>
          <span class="stat-value">${totalPlayers}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">ACTIVE</span>
          <span class="stat-value">${activePlayers}</span>
        </div>
      </div>
    </div>
  `;
}