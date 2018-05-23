import { statuses } from './helpers';

// Default events
function startConnection() {
  this.emit('connection:finished');
}

function finishConnection() {
  clearInterval(this.connectionInterval);
  this.status = statuses.connected;

  console.info('Connection established');
}

// exported function
export default function initEvents() {
  this.on('connection:start', startConnection);
  this.on('connection:finished', finishConnection);
}
