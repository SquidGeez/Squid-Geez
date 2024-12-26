export class LoreDisplay {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'lore-display';
    this.initialize();
  }

  initialize() {
    this.element.innerHTML = `
      <div class="lore-header">
        <h3>PROTOCOL ARCHIVES</h3>
        <div class="archive-status">CLASSIFIED</div>
      </div>
      <div class="lore-content">
        ${this.createChapterSelector()}
        ${this.createLoreViewer()}
      </div>
    `;
  }

  createChapterSelector() {
    return `
      <div class="chapter-selector">
        <div class="chapter-btn active" data-chapter="origins">GENESIS</div>
        <div class="chapter-btn" data-chapter="mechanics">MECHANICS</div>
        <div class="chapter-btn" data-chapter="psychology">PSYCHOLOGY</div>
        <div class="chapter-btn" data-chapter="technology">TECHNOLOGY</div>
        <div class="chapter-btn" data-chapter="philosophy">PHILOSOPHY</div>
        <div class="chapter-btn" data-chapter="rituals">RITUALS</div>
        <div class="chapter-btn" data-chapter="prophecies">PROPHECIES</div>
        <div class="chapter-btn" data-chapter="artifacts">ARTIFACTS</div>
      </div>
    `;
  }

  createLoreViewer() {
    return `
      <div class="lore-viewer">
        <div class="lore-scroll">
          <div class="lore-text">
            <div class="classified-stamp">TOP SECRET</div>
            <div class="lore-content">
              Select a chapter to access classified information...
              <div class="warning-text">WARNING: All access is monitored and logged</div>
            </div>
          </div>
        </div>
        <div class="lore-footer">
          <div class="clearance-level">CLEARANCE LEVEL: ALPHA</div>
          <div class="access-code">ACCESS CODE: ████-████-████</div>
        </div>
      </div>
    `;
  }
}