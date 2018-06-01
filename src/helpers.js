export const statuses = {
  disconnected: 'disconnected',
  connecting: 'connecting',
  connected: 'connected',
};

export function attachListener({ origin, data }) {
  if (!this.whitelist.includes(origin)) {
    throw new Error(`${origin} - is not included in whitelist`);
  }

  this.origin = origin;

  if (this.events[data]) {
    this.events[data]();
  }
}

// Create connection function
// creates iFrame and trying to connect inside with interval
export function createConnection() {
  const frame = document.createElement('iframe');

  Object.assign(frame, {
    name: 'theFionce',
    src: this.url,
  });

  frame.style.display = 'none';

  document.body.append(frame);
  const frameDoc = frame.contentDocument || frame.contentWindow.document;

  if (frameDoc.readyState === 'complete') {
    console.info('Frame loaded');

    this.frame = frame;

    this.connectionInterval = setInterval(() => {
      this.emit('connection:start');
    }, 1000);

    this.status = statuses.connecting;
    return;
  }

  setTimeout(createConnection.bind(this), 500);
}

// Create connection listner on window
export function createConnectionListener() {
  if (window.addEventListener) {
    window.addEventListener('message', attachListener.bind(this), false);
  } else {
    window.attachEvent('onmessage', attachListener.bind(this));
  }
}

// Validations
export function validateConstructor(isConnecter, url, whitelist) {
  if (isConnecter && url === '') {
    throw new Error('Please provide correct url for connections');
  }

  if (whitelist.length === 0) {
    throw new Error('Please provide whitelist for connections');
  }
}

// Default events
export function initEvents() {
  this.on('connection:start', () => {
    this.emit('connection:finished');
    this.emit('start');
  });

  this.on('connection:finished', () => {
    clearInterval(this.connectionInterval);
    this.status = statuses.connected;

    console.info('Connection established');
  });
}
