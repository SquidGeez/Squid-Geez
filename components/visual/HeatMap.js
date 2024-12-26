export class HeatMap {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'heat-map';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="heat-header">
        <h3>ELIMINATION HEAT MAP</h3>
        <div class="heat-legend">
          ${this.createLegend()}
        </div>
      </div>
      <div class="heat-grid">
        ${this.createHeatGrid()}
      </div>
      <div class="heat-stats">
        <div class="stat-item">
          <span class="stat-label">HOT ZONES</span>
          <span class="stat-value">12</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">SAFE ZONES</span>
          <span class="stat-value">3</span>
        </div>
      </div>
    `;
  }

  createLegend() {
    const levels = ['High', 'Medium', 'Low'];
    return levels.map(level => `
      <div class="legend-item">
        <div class="legend-color heat-${level.toLowerCase()}"></div>
        <span>${level}</span>
      </div>
    `).join('');
  }

  createHeatGrid() {
    return Array(36).fill(0).map(() => {
      const heat = ['high', 'medium', 'low'][Math.floor(Math.random() * 3)];
      return `<div class="heat-cell heat-${heat}"></div>`;
    }).join('');
  }
}