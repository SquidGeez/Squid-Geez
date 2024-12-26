export class LeaderboardDisplay {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'leaderboard-display';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="leaderboard-header">
        <h3>TOP SURVIVORS</h3>
        <div class="prize-pool">₩45.6B</div>
      </div>
      <div class="leaderboard-content">
        ${this.createLeaderboardEntries()}
      </div>
      <div class="leaderboard-stats">
        <div class="stat-item">
          <span class="stat-label">SURVIVAL RATE</span>
          <span class="stat-value">0.2%</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">NEXT ROUND</span>
          <span class="stat-value">14:59</span>
        </div>
      </div>
    `;
  }

  createLeaderboardEntries() {
    const entries = [
      { rank: 1, id: '067', score: '12,450', status: 'active' },
      { rank: 2, id: '218', score: '10,230', status: 'warning' },
      { rank: 3, id: '456', score: '8,120', status: 'danger' }
    ];

    return entries.map(entry => `
      <div class="leaderboard-entry status-${entry.status}">
        <div class="entry-rank">#${entry.rank}</div>
        <div class="entry-id">${entry.id}</div>
        <div class="entry-score">${entry.score}</div>
      </div>
    `).join('');
  }
}