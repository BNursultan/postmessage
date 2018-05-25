import test from 'ava';
import './helpers/browser';
import { onStart, WHITELIST, URL } from './helpers/fixtures';
import Wedding from '../main';

const Connecter = Wedding({ isConnecter: true, url: URL, whitelist: WHITELIST });

test('Should throw error on same event', (t) => {
  const duplicateEvent = 'event:duplicate';

  Connecter.on(duplicateEvent, () => {});
  const { message } = t.throws(() => {
    Connecter.on(duplicateEvent, () => {});
  }, Error);

  t.is(message, `${duplicateEvent} - event listner already exists`);
});

test('Should throw error on non existing event', (t) => {
  const nonexistEvent = 'event:nonexists';

  const { message } = t.throws(() => {
    Connecter.off(nonexistEvent);
  }, Error);

  t.is(message, `${nonexistEvent} - event listner does not exists`);
});

test('Should off duplicated event', (t) => {
  const duplicateEvent = 'event:duplicate';
  Connecter.off(duplicateEvent);

  t.true(!Connecter.events[duplicateEvent]);
});

test('Should throw error emitting default events', (t) => {
  Connecter.connect(onStart);

  const { message } = t.throws(() => {
    Connecter.emit('connection:start');
  }, Error);

  t.true(typeof message === 'string');
});
