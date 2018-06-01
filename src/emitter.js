// @flow
import type { OnFunction, Events } from './types';

export default class Emitter {
  events: Events | any;
  isConnecter: boolean;
  url: string;
  origin: string;
  frame: any;
  log: boolean;

  on(name: string, fn: ?OnFunction): void {
    if (this.events[name]) {
      throw new Error(`${name} - event listner already exists`);
    }

    this.events = Object.assign(this.events, { [name]: fn });
  }

  emit(name: string): void {
    try {
      if (this.isConnecter) {
        this.frame.contentWindow.postMessage(name, this.url);
      } else {
        window.parent.postMessage(name, this.origin);
      }

      if (this.log) {
        console.info(`${name} - event is emitted`);
      }
    } catch (e) {
      throw new Error(`${e} - Postmessage error on emit`);
    }
  }

  off(name: string): void {
    if (!this.events[name]) {
      throw new Error(`${name} - event listner does not exists`);
    }

    this.events = Object.assign({}, { [name]: undefined });
  }
}
