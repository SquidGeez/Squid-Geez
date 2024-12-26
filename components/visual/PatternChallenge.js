export class PatternChallenge {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'pattern-challenge';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="pattern-header">
        <h3>HONEYCOMB CHALLENGE</h3>
        <div class="pattern-timer">02:30</div>
      </div>
      <div class="pattern-grid">
        ${this.createPatternCells()}
      </div>
      <div class="pattern-controls">
        <div class="control-info">
          <span class="info-label">PRECISION</span>
          <span class="info-value">98.5%</span>
        </div>
        <div class="control-info">
          <span class="info-label">ATTEMPTS</span>
          <span class="info-value">2/3</span>
        </div>
      </div>
    `;
  }

  createPatternCells() {
    const pattern = [
      [1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0]
    ];

    return pattern.map(row => 
      row.map(cell => `
        <div class="pattern-cell ${cell ? 'active' : 'inactive'}">
          <div class="cell-inner"></div>
        </div>
      `).join('')
    ).join('');
  }
}