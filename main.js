import './style.css';
import { initializeAudio } from './src/audio';
import { StartGameModal } from './src/components/modal/StartGameModal';
import { asciiLogo } from './src/components/ascii-logo';
import { GameArena } from './src/components/visual/GameArena';
import { LeaderboardDisplay } from './src/components/visual/LeaderboardDisplay';
import { GamePhaseIndicator } from './src/components/visual/GamePhaseIndicator';
import { HeatMap } from './src/components/visual/HeatMap';
import { PlayerTracker } from './src/components/visual/PlayerTracker';
import { PrizePool } from './src/components/visual/PrizePool';
import { VisualsSection } from './src/components/visual/VisualsSection';
import { LiveVisualsSection } from './src/components/visual/LiveVisualsSection';

// Initialize game components
const startModal = new StartGameModal();
startModal.show();

// Initialize main interface
document.querySelector('#app').innerHTML = `
  <div class="content-wrapper">
    <pre id="logo" class="ascii-logo">${asciiLogo}</pre>
    
    <div class="game-interface">
      <div class="main-grid">
        <!-- Primary Game Section -->
        <div class="arena-section">
          ${new GameArena().element.outerHTML}
          ${new PrizePool().element.outerHTML}
        </div>

        <!-- Stats Section -->
        <div class="stats-section">
          ${new LeaderboardDisplay().element.outerHTML}
          ${new GamePhaseIndicator().element.outerHTML}
          ${new HeatMap().element.outerHTML}
          ${new PlayerTracker().element.outerHTML}
        </div>
      </div>

      <!-- Visuals Section -->
      ${new VisualsSection().element.outerHTML}

      <!-- Live Visuals Section -->
      ${new LiveVisualsSection().element.outerHTML}
    </div>
  </div>
`;

// Handle game start
startModal.onStart(() => {
  const audio = initializeAudio();
  audio.start();
});