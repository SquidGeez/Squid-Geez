export function createStartGameModal() {
  const modal = document.createElement('div');
  modal.className = 'start-game-modal';
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>WELCOME TO THE GAME</h2>
      </div>
      <div class="modal-body">
        <p>456 players have been chosen.</p>
        <p>Only one will survive.</p>
        <p>Are you ready to play?</p>
      </div>
      <button class="start-button">ENTER GAME</button>
    </div>
  `;
  
  return modal;
}