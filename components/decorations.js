// Squid Game decorative elements
export function createGuardShapes() {
  const shapes = ['circle', 'triangle', 'square'];
  const container = document.createElement('div');
  container.className = 'guard-shapes';

  for (let i = 0; i < 15; i++) {
    const shape = document.createElement('div');
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    shape.className = `guard-shape guard-${shapeType}`;
    shape.style.left = `${Math.random() * 100}%`;
    shape.style.top = `${Math.random() * 100}%`;
    container.appendChild(shape);
  }

  return container;
}

export function createScanMask() {
  const mask = document.createElement('div');
  mask.className = 'squid-mask';
  return mask;
}