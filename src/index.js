// @flow
import type { ArgsType, Status, OnFunction } from './types';
import Emitter from './emitter';
import { createConnection, createConnectionListener, statuses, initEvents } from './helpers';

export default class Wedding extends Emitter {
  whitelist: Array<string>;
  connectionInterval: any;
  status: Status;

  constructor({
    isConnecter,
    url,
    whitelist,
  }: ArgsType): void {
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

  connect(onStart: ?OnFunction = (() => {})): void {
    if (!this.isConnecter) {
      throw new Error('This is not a connector');
    }

    console.info('Initializing connection');

    this.on('start', onStart);
    createConnection.call(this);
  }
}
