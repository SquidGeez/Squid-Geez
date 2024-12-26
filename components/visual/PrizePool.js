export class PrizePool {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'prize-pool-display';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="prize-header">
        <h3>PRIZE POOL</h3>
        <div class="pool-timer">23:59:59</div>
      </div>
      <div class="prize-amount">
        <div class="amount-value">₩45.6B</div>
        <div class="amount-change">+₩1.2B</div>
      </div>
      <div class="prize-distribution">
        ${this.createDistributionBars()}
      </div>
      <div class="prize-stats">
        <div class="stat">
          <span class="stat-label">PER SURVIVOR</span>
          <span class="stat-value">₩195.7M</span>
        </div>
        <div class="stat">
          <span class="stat-label">ELIMINATED</span>
          <span class="stat-value">₩0</span>
        </div>
      </div>
    `;
  }

  createDistributionBars() {
    return `
      <div class="distribution-grid">
        ${Array(20).fill(0).map(() => `
          <div class="distribution-bar">
            <div class="bar-fill" style="height: ${Math.random() * 100}%"></div>
          </div>
        `).join('')}
      </div>
    `;
  }
}