export class LiveVisualsSection {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'live-visuals-section';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="live-visuals-container">
        <h2 class="section-title">LIVE PROTOCOL DATA</h2>
        
        <div class="live-grid">
          <!-- Trading Activity -->
          <div class="live-card">
            <h3>TRADING ACTIVITY</h3>
            <div class="activity-visualization">
              ${this.createActivityVisualization()}
            </div>
            <div class="live-stats">
              <div class="stat">
                <span class="stat-label">CURRENT</span>
                <span class="stat-value">1,234 TPS</span>
              </div>
              <div class="stat">
                <span class="stat-label">PEAK</span>
                <span class="stat-value">2,456 TPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  createActivityVisualization() {
    return Array(24).fill(0).map(() => {
      const height = Math.random() * 100;
      return `
        <div class="activity-bar">
          <div class="bar-fill" style="height: ${height}%"></div>
        </div>
      `;
    }).join('');
  }
}