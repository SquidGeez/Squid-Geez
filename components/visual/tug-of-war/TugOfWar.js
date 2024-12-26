import { TeamDisplay } from './TeamDisplay';
import { RopeDisplay } from './RopeDisplay';
import { StatsDisplay } from './StatsDisplay';

export class TugOfWar {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'tug-of-war';
    this.initialize();
  }

  initialize() {
    // Initial game state
    const gameState = {
      teamA: {
        name: 'A',
        side: 'left',
        power: 12450,
        powerPercentage: 75,
        activeMembers: 10,
        members: this.generateTeamMembers(10, true)
      },
      teamB: {
        name: 'B',
        side: 'right',
        power: 11890,
        powerPercentage: 65,
        activeMembers: 9,
        members: this.generateTeamMembers(9, false)
      },
      ropePosition: 48,
      stats: {
        momentum: 2.3,
        momentumPercentage: 65,
        force: 1240,
        forcePercentage: 75
      }
    };

    this.render(gameState);
  }

  generateTeamMembers(count, isTeamA) {
    return Array(10).fill(0).map((_, i) => ({
      id: Math.floor(Math.random() * 456).toString().padStart(3, '0'),
      power: Math.floor(Math.random() * 500 + 1000),
      powerPercentage: Math.random() * 100,
      active: i < count
    }));
  }

  render(gameState) {
    this.element.innerHTML = `
      <div class="tow-header">
        <h3>TUG OF WAR CHALLENGE</h3>
        <div class="tow-timer">03:45</div>
      </div>
      <div class="tow-visualization"></div>
    `;

    const visualization = this.element.querySelector('.tow-visualization');

    // Create and append team displays
    const teamA = new TeamDisplay('a', gameState.teamA);
    const rope = new RopeDisplay(gameState.ropePosition);
    const teamB = new TeamDisplay('b', gameState.teamB);
    const stats = new StatsDisplay(gameState.stats);

    visualization.appendChild(teamA.element);
    visualization.appendChild(rope.element);
    visualization.appendChild(teamB.element);
    this.element.appendChild(stats.element);
  }
}