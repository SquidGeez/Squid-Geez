export function renderGameRules(rules) {
  return `
    <div class="game-rules-container">
      <h2 class="rules-title">${rules.title}</h2>
      ${rules.sections.map(section => `
        <div class="rules-section">
          <h3 class="section-title">${section.title}</h3>
          <ul class="rules-list">
            ${section.rules.map(rule => `
              <li class="rule-item">
                <span class="rule-marker"></span>
                <span class="rule-text">${rule}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}