class Emitter {
  constructor() {
    this.events = Object.create(null);
  }

  on(name, fn) {
    if (this.events[name]) {
      console.error('This event listner already exists');
      return;
    }

    this.events = Object.assign(this.events, { [name]: fn });
  }

  emit(name) {
    if (this.isConnecter) {
      this.frame.contentWindow.postMessage(name, this.url);
    } else {
      window.parent.postMessage(name, this.url);
    }
  }

  off(name) {
    if (!this.events[name]) {
      console.error('This event listner doesnt exists');
      return;
    }

    this.events = Object.assign({}, { [name]: undefined });
  }
}

export default Emitter;
