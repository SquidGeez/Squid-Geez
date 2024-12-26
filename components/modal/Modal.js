export class Modal {
  constructor(className = 'modal') {
    this.element = document.createElement('div');
    this.element.className = className;
  }

  setContent(content) {
    this.element.innerHTML = content;
  }

  show() {
    document.body.appendChild(this.element);
  }

  hide() {
    this.element.remove();
  }

  on(eventName, selector, callback) {
    const element = this.element.querySelector(selector);
    if (element) {
      element.addEventListener(eventName, callback);
    }
  }
}