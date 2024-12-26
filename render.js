import { renderConversationGroup } from './render/conversationGroup.js';

export function renderConversation(conversations) {
  // Group conversations by topic
  const groups = [
    {
      title: "The Origins",
      conversations: conversations.slice(0, 6)
    },
    {
      title: "The Deep Protocol",
      conversations: conversations.slice(6, 12)
    },
    {
      title: "The Abyssal Network",
      conversations: conversations.slice(12, 18)
    },
    {
      title: "The Infinite Descent",
      conversations: conversations.slice(18)
    }
  ];

  return `
    <div class="conversation-container">
      ${groups.map(group => renderConversationGroup(group)).join('')}
    </div>
  `;
}