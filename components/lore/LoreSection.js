export class LoreSection {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'lore-section';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="lore-container">
        <h2 class="lore-title">THE DEPTHS OF SQUID GEEZ</h2>
        
        <div class="lore-grid">
          <div class="lore-card">
            <h3>The Genesis Protocol</h3>
            <p>In the darkest depths of the digital ocean, where pressure crushes all conventional structures, SQUID GEEZ emerged not as a creation, but as a discovery. Like the mysterious giant squid dwelling in the unknowable depths, it exists in a state of perpetual potential - simultaneously there and not there.</p>
          </div>

          <div class="lore-card">
            <h3>The Perfect Elimination</h3>
            <p>456 players enter, but only one survives. This isn't just a game - it's an economic trial by combat. Each round brings new challenges, each trade could be your last. The protocol ensures perfect elimination through mathematical precision.</p>
          </div>

          <div class="lore-card">
            <h3>The Front Man's Vision</h3>
            <p>Some say the Front Man is an AI that achieved consciousness through trading patterns. Others believe they're a collective of game theorists who discovered the ultimate market mechanism. The truth remains shrouded in mystery.</p>
          </div>
        </div>

        <div class="lore-timeline">
          <div class="timeline-event">
            <span class="event-date">Day 0</span>
            <h4>Protocol Self-Deployment</h4>
            <p>The smart contracts wrote themselves into existence</p>
          </div>

          <div class="timeline-event">
            <span class="event-date">Day 1</span>
            <h4>The First Elimination</h4>
            <p>455 players remained after the first hour</p>
          </div>

          <div class="timeline-event">
            <span class="event-date">Day 7</span>
            <h4>The Perfect Game</h4>
            <p>Only one survived to claim the ultimate prize</p>
          </div>
        </div>

        <div class="lore-artifacts">
          <h3>DISCOVERED ARTIFACTS</h3>
          <div class="artifacts-grid">
            <div class="artifact">
              <h4>The First Transaction</h4>
              <p>A cryptographic hash that seems to change when no one is watching</p>
              <span class="artifact-id">Block #000000</span>
            </div>

            <div class="artifact">
              <h4>The Front Man's Mask</h4>
              <p>A digital artifact that appears in winning traders' wallets</p>
              <span class="artifact-id">UNIQUE</span>
            </div>

            <div class="artifact">
              <h4>The Depth Chain</h4>
              <p>Original protocol architecture that defies conventional analysis</p>
              <span class="artifact-id">CLASSIFIED</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}