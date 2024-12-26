export class TugOfWar {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'tug-of-war';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="tow-header">
        <h3>TUG OF WAR CHALLENGE</h3>
        <div class="tow-timer">03:45</div>
      </div>
      <div class="tow-visualization">
        <div class="team-a-side">
          <div class="team-stats">
            <div class="team-name">TEAM A</div>
            <div class="team-power">12,450</div>
            <div class="team-members">10/10</div>
          </div>
          <div class="power-meter">
            <div class="power-bar" style="width: 75%"></div>
            <div class="power-label">PULL FORCE</div>
          </div>
          ${this.createTeamMembers('A')}
        </div>
        <div class="rope-section">
          <div class="rope-container">
            <div class="rope-indicator" style="left: 48%"></div>
            <div class="rope">
              ${this.createRopeSegments()}
            </div>
            <div class="center-mark"></div>
          </div>
          <div class="force-indicator">
            <div class="force-arrow left active"></div>
            <div class="force-value">+2.3%</div>
            <div class="force-arrow right"></div>
          </div>
        </div>
        <div class="team-b-side">
          <div class="team-stats">
            <div class="team-name">TEAM B</div>
            <div class="team-power">11,890</div>
            <div class="team-members">9/10</div>
          </div>
          <div class="power-meter">
            <div class="power-bar" style="width: 65%"></div>
            <div class="power-label">PULL FORCE</div>
          </div>
          ${this.createTeamMembers('B')}
        </div>
      </div>
      <div class="tow-stats">
        <div class="stat-item">
          <span class="stat-label">MOMENTUM</span>
          <span class="stat-value">+2.3%</span>
          <div class="momentum-indicator">
            <div class="momentum-bar" style="width: 65%"></div>
          </div>
        </div>
        <div class="stat-item">
          <span class="stat-label">FORCE</span>
          <span class="stat-value">1,240N</span>
          <div class="force-meter">
            <div class="force-level" style="height: 75%"></div>
          </div>
        </div>
      </div>
    `;
  }

  createTeamMembers(team) {
    return `
      <div class="team-members-grid">
        ${Array(10).fill(0).map((_, i) => `
          <div class="member-slot ${i < (team === 'A' ? 10 : 9) ? 'active' : ''} ${team === 'A' ? 'left' : 'right'}">
            <div class="member-avatar">
              <div class="member-number">#${Math.floor(Math.random() * 456).toString().padStart(3, '0')}</div>
              <div class="member-power">${Math.floor(Math.random() * 500 + 1000)}</div>
            </div>
            <div class="member-status">
              <div class="status-indicator"></div>
              <div class="power-gauge">
                <div class="gauge-fill" style="width: ${Math.random() * 100}%"></div>
              </div>
            </div>
          </div>
        `).join('')}
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
}