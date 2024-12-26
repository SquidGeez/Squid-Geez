export class VisualsSection {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'visuals-section';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="visuals-container">
        <h2 class="visuals-title">PROTOCOL VISUALIZATION</h2>
        
        <div class="visualization-grid">
          <!-- Market Depth Visualization -->
          <div class="visual-card">
            <h3>MARKET DEPTH</h3>
            <div class="depth-visualization">
              ${this.createDepthBars()}
            </div>
            <div class="visual-stats">
              <div class="stat">
                <span class="stat-label">VOLUME</span>
                <span class="stat-value">₩45.6B</span>
              </div>
              <div class="stat">
                <span class="stat-label">TRADES</span>
                <span class="stat-value">1,234</span>
              </div>
            </div>
          </div>

          <!-- Player Distribution -->
          <div class="visual-card">
            <h3>PLAYER DISTRIBUTION</h3>
            <div class="distribution-map">
              ${this.createDistributionCells()}
            </div>
            <div class="visual-stats">
              <div class="stat">
                <span class="stat-label">ACTIVE</span>
                <span class="stat-value">234</span>
              </div>
              <div class="stat">
                <span class="stat-label">ELIMINATED</span>
                <span class="stat-value">222</span>
              </div>
            </div>
          </div>

          <!-- Phase Timeline -->
          <div class="visual-card">
            <h3>PHASE TIMELINE</h3>
            <div class="phase-timeline">
              ${this.createPhaseTimeline()}
            </div>
            <div class="visual-stats">
              <div class="stat">
                <span class="stat-label">CURRENT</span>
                <span class="stat-value">RED LIGHT</span>
              </div>
              <div class="stat">
                <span class="stat-label">NEXT</span>
                <span class="stat-value">14:59</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Protocol Statistics -->
        <div class="protocol-stats">
          <div class="stat-card">
            <h4>TOTAL VOLUME</h4>
            <div class="stat-value">₩45.6B</div>
            <div class="stat-chart">${this.createStatChart()}</div>
          </div>
          <div class="stat-card">
            <h4>SURVIVAL RATE</h4>
            <div class="stat-value">51.3%</div>
            <div class="stat-chart">${this.createStatChart()}</div>
          </div>
          <div class="stat-card">
            <h4>ELIMINATION RATE</h4>
            <div class="stat-value">48.7%</div>
            <div class="stat-chart">${this.createStatChart()}</div>
          </div>
        </div>
      </div>
    `;
  }

  createDepthBars() {
    return Array(20).fill(0).map(() => `
      <div class="depth-bar">
        <div class="bar-fill" style="height: ${Math.random() * 100}%"></div>
      </div>
    `).join('');
  }

  createDistributionCells() {
    return Array(100).fill(0).map(() => {
      const status = Math.random() > 0.5 ? 'active' : 'eliminated';
      return `<div class="distribution-cell ${status}"></div>`;
    }).join('');
  }

  createPhaseTimeline() {
    const phases = ['RED LIGHT', 'HONEYCOMB', 'TUG OF WAR', 'MARBLES', 'GLASS BRIDGE', 'FINAL'];
    return phases.map(phase => `
      <div class="timeline-phase">
        <div class="phase-dot"></div>
        <div class="phase-name">${phase}</div>
      </div>
    `).join('');
  }

  createStatChart() {
    return Array(10).fill(0).map(() => `
      <div class="chart-bar">
        <div class="bar-fill" style="height: ${Math.random() * 100}%"></div>
      </div>
    `).join('');
  }
}