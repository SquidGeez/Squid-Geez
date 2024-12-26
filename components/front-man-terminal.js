export function renderFrontManTerminal(messages) {
  return `
    <div class="front-man-terminal">
      <div class="terminal-header">
        <span class="terminal-title">FRONT MAN TERMINAL</span>
        <span class="terminal-status">SECURE CHANNEL</span>
      </div>
      <div class="terminal-content">
        ${messages.map(msg => `
          <div class="terminal-message priority-${msg.priority}">
            <div class="message-header">
              <span class="message-id">${msg.id}</span>
              <span class="message-timestamp">${msg.timestamp}</span>
            </div>
            <div class="message-content">${msg.message}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}