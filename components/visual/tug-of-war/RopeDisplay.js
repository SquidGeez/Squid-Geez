export class RopeDisplay {
  constructor(position = 50) {
    this.element = document.createElement('div');
    this.element.className = 'rope-section';
    this.position = position;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <div class="rope-container">
        <div class="rope-indicator" style="left: ${this.position}%"></div>
        <div class="rope">
          ${this.createRopeSegments()}
        </div>
        <div class="center-mark"></div>
      </div>
      <div class="force-indicator">
        <div class="force-arrow left ${this.position < 50 ? 'active' : ''}"></div>
        <div class="force-value">${Math.abs(50 - this.position).toFixed(1)}%</div>
        <div class="force-arrow right ${this.position > 50 ? 'active' : ''}"></div>
      </div>
    `;
  }

  createRopeSegments() {
    return Array(20).fill(0).map(() => `
      <div class="rope-segment">
        <div class="rope-knot"></div>
      </div>
    `).join('');
  }

  updatePosition(newPosition) {
    this.position = newPosition;
    this.render();
  }
}