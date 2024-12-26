export class BattleArena {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'battle-arena';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="arena-header">
        <h3>BATTLE ARENA</h3>
        <div class="arena-timer">05:00</div>
      </div>
      <div class="arena-content">
        <div class="team-section team-a">
          <div class="team-header">
            <h4>TEAM A</h4>
            <div class="team-power">8,450</div>
          </div>
          ${this.createTeamPlayers('A')}
        </div>
        <div class="arena-divider">
          <div class="versus">VS</div>
        </div>
        <div class="team-section team-b">
          <div class="team-header">
            <h4>TEAM B</h4>
            <div class="team-power">7,890</div>
          </div>
          ${this.createTeamPlayers('B')}
        </div>
      </div>
      <div class="arena-footer">
        <div class="battle-status">TUG OF WAR - ROUND 3</div>
      </div>
    `;
  }

  createTeamPlayers(team) {
    const players = [
      { id: '067', power: '2,450' },
      { id: '218', power: '2,230' },
      { id: '456', power: '1,890' }
    ];

    return `
      <div class="team-players">
        ${players.map(player => `
          <div class="player-slot">
            <div class="player-id">#${player.id}</div>
            <div class="player-power">${player.power}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}