const attachListener = (e) => {
  if (!this.whitelist.includes(e.origin)) {
    console.error('Origin is not included in whitelist');
    return;
  }

  this.origin = e.origin;

  if (this.events[e.data]) {
    this.events[e.data]();
  }
};

// Create connection function
// creates iFrame and trying to connect inside with interval
export function createConnection(url, callback) {
  if (typeof window === 'undefined') {
    return null;
  }

  const frame = document.createElement('iframe');

  Object.assign(frame, {
    name: 'theFionce',
    src: url,
    style: {
      display: 'none',
    },
  });

  frame.onload = () => {
    console.info('Frame loaded');
    callback(frame);
  };

  document.body.append(frame);
  return frame;
}

// Create connection listner on window
export function createConnectionListener() {
  // This doesn't while server side rendered
  if (typeof window === 'undefined') {
    return;
  }

  if (window.addEventListener) {
    window.addEventListener('message', attachListener, false);
  } else {
    window.attachEvent('onmessage', attachListener);
  }
}

// Validations
function checkConnecter(isConnecter, url) {
  if (isConnecter && url === '') {
    console.error('Please provide correct url for connections');
    return false;
  }

  return true;
}

function checkWhitelist(whitelist) {
  if (whitelist.length === 0) {
    console.error('Please provide whitelist for connections');
    return false;
  }

  return true;
}

export function validateConstructor(isConnecter, url, whitelist) {
  return checkConnecter(isConnecter, url) && checkWhitelist(whitelist);
}

export const statuses = {
  disconnected: 'disconnected',
  connecting: 'connecting',
  connected: 'connected',
};
