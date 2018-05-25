class Emitter {
  on(name, fn) {
    if (this.events[name]) {
      throw new Error(`${name} - event listner already exists`);
    }

    this.events = Object.assign(this.events, { [name]: fn });
  }

  emit(name) {
    try {
      if (this.isConnecter) {
        this.frame.contentWindow.postMessage(name, this.url);
      } else {
        window.parent.postMessage(name, this.origin);
      }
    } catch (e) {
      throw new Error(`${e} - Postmessage error on emit`);
    }
  }

  off(name) {
    if (!this.events[name]) {
      throw new Error(`${name} - event listner does not exists`);
    }

    this.events = Object.assign({}, { [name]: undefined });
  }
}

export default Emitter;
