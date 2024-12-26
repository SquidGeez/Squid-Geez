export function renderEliminationFeed(eliminations, announcements) {
  return `
    <div class="elimination-feed">
      <div class="feed-section eliminations">
        <h3 class="feed-title">RECENT ELIMINATIONS</h3>
        <div class="feed-content">
          ${eliminations.map(elim => `
            <div class="elimination-entry">
              <span class="player-id">Player ${elim.id}</span>
              <span class="elimination-cause">${elim.cause}</span>
              <span class="elimination-prize">${elim.prize}</span>
              <span class="elimination-time">${elim.timestamp}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="feed-section announcements">
        <h3 class="feed-title">FRONT MAN ANNOUNCEMENTS</h3>
        <div class="feed-content">
          ${announcements.map(ann => `
            <div class="announcement-entry priority-${ann.priority}">
              <span class="announcement-text">${ann.message}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}