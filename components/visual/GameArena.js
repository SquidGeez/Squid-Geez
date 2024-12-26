import { createGameShapes } from '../GameShapes';
import { createGameDoll } from '../GameDoll';
import { createPhaseIndicator } from '../PhaseIndicator';
import { createGameStats } from '../GameStats';

export class GameArena {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'game-arena';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="arena-overlay"></div>
      <div class="arena-grid"></div>
      <div class="arena-content">
        ${createPhaseIndicator({
          phase: 'RED LIGHT',
          timeRemaining: '05:00',
          totalPlayers: 456,
          activePlayers: 234
        })}
        
        <div class="arena-main">
          <div class="trading-floor">
            ${this.createTradingFloor()}
          </div>
          <div class="elimination-zone">
            ${this.createEliminationZone()}
          </div>
        </div>

        ${createGameStats({
          volume: '₩45.6B',
          trades: '1,234',
          eliminated: '222',
          survivors: '234'
        })}
      </div>
    `;

    this.element.appendChild(createGameShapes());
    this.element.appendChild(createGameDoll());
  }

  createTradingFloor() {
    return `
      <div class="trading-grid">
        ${Array(16).fill(0).map(() => `
          <div class="trading-cell">
            <div class="player-indicator"></div>
            <div class="trade-info">
              <span class="trade-volume">₩1.2M</span>
              <span class="trade-time">00:30</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  createEliminationZone() {
    return `
      <div class="elimination-header">
        <h3>ELIMINATION ZONE</h3>
        <div class="elimination-counter">222/456</div>
      </div>
      <div class="elimination-feed">
        ${Array(5).fill(0).map(() => `
          <div class="elimination-entry">
            <span class="player-id">#${Math.floor(Math.random() * 456).toString().padStart(3, '0')}</span>
            <span class="elimination-cause">Pattern Violation</span>
            <span class="elimination-time">00:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}</span>
          </div>
        `).join('')}
      </div>
    `;
  }
}