import { Modal } from './Modal';

export class StartGameModal extends Modal {
  constructor() {
    super('start-game-modal');
    this.setContent(`
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
    `);
  }

  onStart(callback) {
    this.on('click', '.start-button', () => {
      callback();
      this.hide();
    });
  }
}