export const createConversation = (speaker, text) => ({
  speaker,
  text,
  timestamp: generateTimestamp()
});

function generateTimestamp() {
  const depth = Math.floor(Math.random() * 11000) + 1000;
  return `Depth: -${depth}m`;
}