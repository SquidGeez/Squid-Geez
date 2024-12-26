export class GlassBridge {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'glass-bridge';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="bridge-header">
        <h3>GLASS BRIDGE CHALLENGE</h3>
        <div class="bridge-timer">01:45</div>
      </div>
      <div class="bridge-visualization">
        ${this.createBridgePanels()}
      </div>
      <div class="bridge-stats">
        <div class="stat-item">
          <span class="stat-label">SURVIVORS</span>
          <span class="stat-value">3/16</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">NEXT JUMP</span>
          <span class="stat-value">15s</span>
        </div>
      </div>
    `;
  }

  createBridgePanels() {
    return Array(8).fill(0).map(() => `
      <div class="bridge-step">
        <div class="glass-panel left"></div>
        <div class="glass-panel right"></div>
      </div>
    `).join('');
  }
}