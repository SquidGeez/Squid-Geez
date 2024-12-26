export function renderPlayerAlerts(alerts) {
  return `
    <div class="player-alerts">
      <div class="alerts-header">
        <span class="alerts-title">SYSTEM ALERTS</span>
        <span class="alerts-count">${alerts.length} Active</span>
      </div>
      <div class="alerts-container">
        ${alerts.map(alert => `
          <div class="alert-item alert-${alert.type}">
            <div class="alert-icon"></div>
            <span class="alert-message">${alert.message}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}