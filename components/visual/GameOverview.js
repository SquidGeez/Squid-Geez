export class GameOverview {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'game-overview';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="overview-header">
        <h2>SQUID GEEZ PROTOCOL</h2>
        <div class="protocol-status">ACTIVE</div>
      </div>
      <div class="overview-grid">
        <div class="stat-panel">
          <div class="stat-title">TOTAL PLAYERS</div>
          <div class="stat-value">456</div>
          <div class="stat-chart"></div>
        </div>
        <div class="stat-panel">
          <div class="stat-title">PRIZE POOL</div>
          <div class="stat-value">₩45.6B</div>
          <div class="stat-chart"></div>
        </div>
        <div class="stat-panel">
          <div class="stat-title">ELIMINATION RATE</div>
          <div class="stat-value">45.6%</div>
          <div class="stat-chart"></div>
        </div>
        <div class="stat-panel">
          <div class="stat-title">TIME REMAINING</div>
          <div class="stat-value">14:32:45</div>
          <div class="stat-chart"></div>
        </div>
      </div>
      <div class="overview-alerts">
        <div class="alert-header">SYSTEM ALERTS</div>
        <div class="alert-list">
          ${this.createAlerts()}
        </div>
      </div>
    `;
  }

  createAlerts() {
    const alerts = [
      { type: 'warning', message: 'Phase 2 starting in 10 minutes' },
      { type: 'danger', message: 'Mass elimination event detected' },
      { type: 'info', message: 'New trading pairs assigned' }
    ];

    return alerts.map(alert => `
      <div class="alert-item alert-${alert.type}">
        <div class="alert-icon"></div>
        <div class="alert-message">${alert.message}</div>
      </div>
    `).join('');
  }
}