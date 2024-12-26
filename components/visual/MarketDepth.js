export class MarketDepth {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'market-depth';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="depth-header">
        <h3>MARKET DEPTH</h3>
        <div class="depth-scale">1:1000</div>
      </div>
      <div class="depth-visualization">
        <div class="buy-orders">
          ${this.createOrderBook('buy')}
        </div>
        <div class="price-column">
          <div class="current-price">45,600.00</div>
          <div class="price-change">+2.4%</div>
        </div>
        <div class="sell-orders">
          ${this.createOrderBook('sell')}
        </div>
      </div>
    `;
  }

  createOrderBook(type) {
    const orders = Array(10).fill(0).map((_, i) => ({
      price: type === 'buy' ? 45600 - (i * 100) : 45600 + (i * 100),
      volume: Math.random() * 1000 + 500
    }));

    return orders.map(order => `
      <div class="order-row ${type}-order">
        <div class="order-price">${order.price.toFixed(2)}</div>
        <div class="order-volume">${order.volume.toFixed(2)}</div>
        <div class="order-bar" style="width: ${(order.volume / 1500) * 100}%"></div>
      </div>
    `).join('');
  }
}