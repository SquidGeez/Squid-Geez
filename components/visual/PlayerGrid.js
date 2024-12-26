export class PlayerGrid {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'player-grid';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="grid-header">
        <h3>ACTIVE PLAYERS</h3>
        <div class="grid-controls">
          <button class="grid-btn">SORT BY RANK</button>
          <button class="grid-btn">FILTER ACTIVE</button>
        </div>
      </div>
      <div class="grid-container">
        ${this.createPlayerCards()}
      </div>
    `;
  }

  createPlayerCards() {
    const players = [
      { id: '067', status: 'active', rank: 1, score: '12,450' },
      { id: '218', status: 'warning', rank: 2, score: '10,230' },
      { id: '456', status: 'danger', rank: 3, score: '8,120' }
    ];

    return players.map(player => `
      <div class="player-card status-${player.status}">
        <div class="player-rank">#${player.rank}</div>
        <div class="player-id">${player.id}</div>
        <div class="player-score">${player.score}</div>
        <div class="player-status"></div>
      </div>
    `).join('');
  }
}