import test from 'ava';
import './helpers/browser';
import { onStart, URL, WHITELIST } from './helpers/fixtures';
import Wedding from '../main';

const nonConnecter = Wedding({ whitelist: WHITELIST });

// Wedding
test('Checks connect method on nonConnecter', (t) => {
  const { message } = t.throws(() => {
    nonConnecter.connect();
  }, Error);

  t.is(message, 'This is not a connector');
});

const Connecter = Wedding({ isConnecter: true, url: URL, whitelist: WHITELIST });

test('Should create a frame', (t) => {
  Connecter.connect(onStart);

  t.is(Connecter.status, 'connecting');
  t.not(Connecter.frame, null);
});

test('Should create default events', (t) => {
  t.true(!!Connecter.events['connection:start']);
  t.true(!!Connecter.events['connection:finished']);
  t.false(!!Connecter.events['event:non-existing']);
});

test('Should show connecters events', (t) => {
  const testFn = () => {};
  const eventName = 'event:test';

  Connecter.on(eventName, testFn);
  t.is(Connecter.events[eventName], testFn);
});
