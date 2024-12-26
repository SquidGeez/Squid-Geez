export function renderVIPMessages(messages) {
  return `
    <div class="vip-observer">
      <h3 class="vip-title">VIP OBSERVATIONS</h3>
      <div class="vip-messages">
        ${messages.map(msg => `
          <div class="vip-message">
            <span class="vip-id">VIP ${msg.id}</span>
            <p class="vip-text">${msg.message}</p>
            <span class="vip-timestamp">${msg.timestamp}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}