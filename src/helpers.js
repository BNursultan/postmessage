export const FRAME_NAME = 'theFionce';

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
  frame.style.display = 'none';
  frame.name = FRAME_NAME;
  frame.src = this.url;

  document.body.append(frame);

  this.status = statuses.connecting;
  this.frame = frame;

  frame.onload = () => {
    console.info('Frame loaded');

    this.connectionInterval = setInterval(() => {
      this.emit('connection:start');
    }, 1000);
  };
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

  if (typeof isConnecter !== 'boolean') {
    throw new Error('isConnecter - argument should be a boolean');
  }

  if (typeof url !== 'string') {
    throw new Error('url - argument should be a string');
  }

  if (!Array.isArray(whitelist)) {
    throw new Error('whitelist - argument should be an array of url strings');
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
