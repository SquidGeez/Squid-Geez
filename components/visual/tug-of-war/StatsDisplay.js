export class StatsDisplay {
  constructor(stats) {
    this.element = document.createElement('div');
    this.element.className = 'tow-stats';
    this.stats = stats;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <div class="stat-item">
        <span class="stat-label">MOMENTUM</span>
        <span class="stat-value">${this.stats.momentum}%</span>
        <div class="momentum-indicator">
          <div class="momentum-bar" style="width: ${this.stats.momentumPercentage}%"></div>
        </div>
      </div>
      <div class="stat-item">
        <span class="stat-label">FORCE</span>
        <span class="stat-value">${this.stats.force}N</span>
        <div class="force-meter">
          <div class="force-level" style="height: ${this.stats.forcePercentage}%"></div>
        </div>
      </div>
    `;
  }

  updateStats(newStats) {
    this.stats = newStats;
    this.render();
  }
}