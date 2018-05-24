import { statuses } from './helpers';

// Default events

// exported function
export default function initEvents() {
  this.on('connection:start', () => {
    this.emit('connection:finished');
  });

  this.on('connection:finished', () => {
    clearInterval(this.connectionInterval);
    this.status = statuses.connected;

    console.info('Connection established');
    this.emit('start');
  });
}
