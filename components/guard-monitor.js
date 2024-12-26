export function renderGuardMonitor(messages) {
  return `
    <div class="guard-monitor">
      <div class="monitor-header">
        <span class="monitor-title">GUARD SURVEILLANCE FEED</span>
        <span class="monitor-status">LIVE</span>
      </div>
      <div class="monitor-feed">
        ${messages.map(msg => `
          <div class="guard-message guard-${msg.id}">
            <div class="guard-icon"></div>
            <span class="guard-text">${msg.message}</span>
            <span class="guard-time">${msg.timestamp}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}