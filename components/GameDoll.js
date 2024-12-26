export const createGameDoll = () => {
  const doll = document.createElement('div');
  doll.className = 'doll-container';
  
  doll.innerHTML = `
    <div class="doll-head">
      <div class="doll-eye left"></div>
      <div class="doll-eye right"></div>
    </div>
    <div class="doll-body">
      <div class="doll-dress"></div>
    </div>
  `;
  
  return doll;
}