import test from 'ava';
import './helpers/browser';
import { onStart, WHITELIST, URL } from './helpers/fixtures';
import Wedding from '../main';

const Connecter = Wedding({ isConnecter: true, url: URL, whitelist: WHITELIST });
Connecter.connect(onStart);

test('Assert connection interval on start', (t) => {
  t.true(Connecter.connectionInterval !== 'null');
});

test('Should cancel interval on finished connection', (t) => {
  Connecter.events['connection:finished']();

  t.true(Connecter.status === 'connected');
});

test('Should call start connection events', (t) => {
  const { message } = t.throws(() => {
    Connecter.events['connection:start']();
  }, Error);

  t.true(typeof message === 'string');
});

test('Assert on start event', (t) => {
  t.true(Connecter.events.start === onStart);
});
