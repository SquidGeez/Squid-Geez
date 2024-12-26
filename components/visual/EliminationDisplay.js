export class EliminationDisplay {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'elimination-display';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="elimination-header">
        <div class="elimination-title">ELIMINATION FEED</div>
        <div class="elimination-counter">201/456</div>
      </div>
      <div class="elimination-list">
        ${this.createEliminationEntries()}
      </div>
      <div class="elimination-footer">
        <div class="next-elimination">
          <span class="next-label">NEXT ELIMINATION IN</span>
          <span class="next-time">02:45</span>
        </div>
      </div>
    `;
  }

  createEliminationEntries() {
    const entries = [
      { id: '123', cause: 'Pattern Failure', time: '00:30' },
      { id: '045', cause: 'Liquidation', time: '01:15' },
      { id: '332', cause: 'Time Expiry', time: '02:00' }
    ];

    return entries.map(entry => `
      <div class="elimination-entry">
        <div class="entry-id">#${entry.id}</div>
        <div class="entry-cause">${entry.cause}</div>
        <div class="entry-time">${entry.time}</div>
      </div>
    `).join('');
  }
}