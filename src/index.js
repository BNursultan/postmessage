import Emitter from './emitter';
import initEvents from './events';
import { createConnection, createConnectionListener, statuses } from './helpers';

class Wedding extends Emitter {
  constructor({ isConnecter, url, whitelist }) {
    super();

    Object.assign(this, {
      events: Object.create(null),
      isConnecter,
      url,
      whitelist,
      origin: '',
      frame: null,
      connectionInterval: null,
      status: statuses.disconnected,
    });

    createConnectionListener.call(this);
    initEvents.call(this);
  }

  connect(onStart = null) {
    if (this.isConnecter) {
      if (typeof onStart !== 'function') {
        throw new Error('Please provide onStart callback');
      }

      console.info('Initializing connection');

      this.on('start', onStart);

      createConnection.call(this);
    } else {
      throw new Error('This is not a connector');
    }
  }
}

export default Wedding;
