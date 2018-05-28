// @flow
import type { ConstructorType, WeddingType, OnFunction } from './types';
import Emitter from './emitter';
import initEvents from './events';
import { createConnection, createConnectionListener, statuses } from './helpers';

class Wedding extends Emitter {
  constructor({
    isConnecter,
    url,
    whitelist,
  }: ConstructorType) {
    super();

    Object.assign(this, ({
      events: Object.create(null),
      isConnecter,
      url,
      whitelist,
      origin: '',
      frame: null,
      connectionInterval: null,
      status: statuses.disconnected,
    }: WeddingType));

    createConnectionListener.call(this);
    initEvents.call(this);
  }

  connect(onStart: ?OnFunction = null): void {
    if (!this.isConnecter) {
      throw new Error('This is not a connector');
    }

    if (typeof onStart !== 'function') {
      throw new Error('Please provide onStart callback');
    }

    console.info('Initializing connection');

    this.on('start', onStart);
    createConnection.call(this);
  }
}

export default Wedding;
