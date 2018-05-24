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

  connect() {
    if (this.isConnecter) {
      console.info('Initializing connection');

      this.frame = createConnection(this.url, (frame) => {
        this.frame = frame;

        if (!this.frame) {
          console.error('Connector does not work in SSR');
          return;
        }

        this.connectionInterval = setInterval(() => {
          this.emit('connection:start');
        }, 1000);

        this.status = statuses.connecting;
      });
    } else {
      console.error('This is not a connector');
    }
  }
}

export default Wedding;
