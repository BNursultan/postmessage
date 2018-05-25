import { statuses } from './helpers';

// Default events
export default function initEvents() {
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
