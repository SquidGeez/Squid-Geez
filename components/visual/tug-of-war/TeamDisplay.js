export class TeamDisplay {
  constructor(side, teamData) {
    this.element = document.createElement('div');
    this.element.className = `team-${side}-side`;
    this.teamData = teamData;
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <div class="team-stats">
        <div class="team-name">TEAM ${this.teamData.name}</div>
        <div class="team-power">${this.teamData.power}</div>
        <div class="team-members">${this.teamData.activeMembers}/10</div>
      </div>
      <div class="power-meter">
        <div class="power-bar" style="width: ${this.teamData.powerPercentage}%"></div>
        <div class="power-label">PULL FORCE</div>
      </div>
      ${this.renderTeamMembers()}
    `;
  }

  renderTeamMembers() {
    return `
      <div class="team-members-grid">
        ${this.teamData.members.map(member => `
          <div class="member-slot ${member.active ? 'active' : ''} ${this.teamData.side}">
            <div class="member-avatar">
              <div class="member-number">#${member.id}</div>
              <div class="member-power">${member.power}</div>
            </div>
            <div class="member-status">
              <div class="status-indicator"></div>
              <div class="power-gauge">
                <div class="gauge-fill" style="width: ${member.powerPercentage}%"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}