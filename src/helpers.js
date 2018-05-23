// Create connection function
// creates iFrame and trying to connect inside with interval
export function createConnection(url) {
  const frame = document.createElement('iframe');

  Object.assign(frame, {
    name: 'theFionce',
    src: url,
    style: {
      display: 'none',
    },
  });

  document.body.append(frame);
  return frame;
}

// Create connection listner on window
export function createConnectionListener(whitelist, self) {
  window.addEventListener('message', (e) => {
    if (!whitelist.includes(e.origin)) {
      console.error('Origin is not included in whitelist');
      return;
    }

    self.events[e.data]();
  }, false);
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
