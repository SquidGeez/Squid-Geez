export function createPlayerCounter(stats) {
  return `
    <div class="player-counter">
      <div class="counter-display">
        <span class="counter-number">${stats.totalPlayers - stats.eliminated}</span>
        <span class="counter-label">PLAYERS REMAINING</span>
      </div>
      <div class="prize-pool">
        <span class="prize-amount">₩${stats.prizePool}</span>
        <span class="prize-label">TOTAL PRIZE</span>
      </div>
    </div>
  `;
}