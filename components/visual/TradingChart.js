export class TradingChart {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'trading-chart';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="chart-header">
        <div class="chart-title">SQUID/GEEZ</div>
        <div class="chart-price">45,600.00</div>
      </div>
      <div class="chart-body">
        <canvas id="priceChart"></canvas>
      </div>
      <div class="chart-footer">
        <div class="chart-stats">
          <div class="stat">
            <span class="stat-label">VOL</span>
            <span class="stat-value">1.2M</span>
          </div>
          <div class="stat">
            <span class="stat-label">HIGH</span>
            <span class="stat-value">48,750.00</span>
          </div>
          <div class="stat">
            <span class="stat-label">LOW</span>
            <span class="stat-value">42,100.00</span>
          </div>
        </div>
      </div>
    `;
  }
}