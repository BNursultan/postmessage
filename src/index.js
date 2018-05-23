import Emitter from './emitter';
import initEvents from './events';
import { createConnection, createConnectionListener, statuses } from './helpers';

class Wedding extends Emitter {
  constructor({ isConnecter, url, whitelist }) {
    super();

    Object.assign(this, {
      isConnecter,
      url,
      whitelist,
      frame: null,
      connectionInterval: null,
      status: statuses.disconnected,
    });

    createConnectionListener(this.whitelist);
    initEvents.call(this);
  }

  init() {
    if (this.isConnecter) {
      console.info('Initializing connection');
      this.frame = createConnection(this.url);

      this.connectionInterval = setInterval(() => {
        this.emit('connection:start');
      }, 1000);

      this.status = statuses.connecting;
    } else {
      console.error('This is not a connector');
    }
  }
}

export default Wedding;
