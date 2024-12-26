export const createGameShapes = () => {
  const shapes = document.createElement('div');
  shapes.className = 'shapes-container';
  
  const shapeTypes = ['circle', 'triangle', 'square'];
  const numShapes = 15;
  
  for (let i = 0; i < numShapes; i++) {
    const shape = document.createElement('div');
    const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    
    shape.className = `shape ${type}`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    
    shapes.appendChild(shape);
  }
  
  return shapes;
}