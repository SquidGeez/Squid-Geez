export class PlayerTracker {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'player-tracker';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="tracker-header">
        <h3>PLAYER ACTIVITY</h3>
        <div class="activity-status">LIVE</div>
      </div>
      <div class="activity-grid">
        ${this.createActivityCells()}
      </div>
      <div class="tracker-stats">
        <div class="stat-row">
          <span class="stat-label">ACTIVE TRADES</span>
          <span class="stat-value">234</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">AVG POSITION</span>
          <span class="stat-value">₩2.3M</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">RISK LEVEL</span>
          <span class="stat-value high-risk">HIGH</span>
        </div>
      </div>
    `;
  }

  createActivityCells() {
    return Array(100).fill(0).map(() => {
      const activity = Math.random();
      let activityClass = 'low';
      if (activity > 0.7) activityClass = 'high';
      else if (activity > 0.4) activityClass = 'medium';
      
      return `<div class="activity-cell ${activityClass}"></div>`;
    }).join('');
  }
}