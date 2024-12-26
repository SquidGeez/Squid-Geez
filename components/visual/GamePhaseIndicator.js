export class GamePhaseIndicator {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'phase-indicator';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="phase-header">
        <h3>CURRENT PHASE</h3>
        <div class="phase-timer">14:59</div>
      </div>
      <div class="phase-stages">
        ${this.createPhaseStages()}
      </div>
      <div class="phase-details">
        <div class="detail-item">
          <span class="detail-label">Survivors</span>
          <span class="detail-value">234/456</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Elimination Rate</span>
          <span class="detail-value">45.6%</span>
        </div>
      </div>
    `;
  }

  createPhaseStages() {
    const phases = [
      { name: 'RED LIGHT', status: 'complete' },
      { name: 'HONEYCOMB', status: 'active' },
      { name: 'TUG OF WAR', status: 'pending' },
      { name: 'MARBLES', status: 'pending' },
      { name: 'GLASS BRIDGE', status: 'pending' },
      { name: 'FINAL GAME', status: 'pending' }
    ];

    return phases.map(phase => `
      <div class="phase-stage status-${phase.status}">
        <div class="stage-indicator"></div>
        <div class="stage-name">${phase.name}</div>
      </div>
    `).join('');
  }
}