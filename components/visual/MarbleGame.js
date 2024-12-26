export class MarbleGame {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'marble-game';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="marble-header">
        <h3>MARBLE GAME PAIRS</h3>
        <div class="marble-timer">04:30</div>
      </div>
      <div class="marble-arena">
        <div class="player-one">
          <div class="player-stats">
            <div class="player-id">#067</div>
            <div class="marble-count">12</div>
          </div>
          <div class="marble-bag">
            ${this.createMarbles(12)}
          </div>
          <div class="player-actions">
            <button class="action-btn">BET ODD</button>
            <button class="action-btn">BET EVEN</button>
          </div>
        </div>
        <div class="game-status">
          <div class="round-info">ROUND 3/5</div>
          <div class="stake-info">STAKE: 5 MARBLES</div>
        </div>
        <div class="player-two">
          <div class="player-stats">
            <div class="player-id">#218</div>
            <div class="marble-count">8</div>
          </div>
          <div class="marble-bag">
            ${this.createMarbles(8)}
          </div>
          <div class="player-actions">
            <button class="action-btn">GUESS ODD</button>
            <button class="action-btn">GUESS EVEN</button>
          </div>
        </div>
      </div>
    `;
  }

  createMarbles(count) {
    return Array(count).fill(0).map(() => `
      <div class="marble">
        <div class="marble-shine"></div>
      </div>
    `).join('');
  }
}