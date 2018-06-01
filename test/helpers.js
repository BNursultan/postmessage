import test from 'ava';
import './helpers/browser';
import Postmessage from '../main';
import { WHITELIST, URL } from './helpers/fixtures';
import { attachListener } from '../src/helpers';

test('Should throw error on whitelist', (t) => {
  const origin = 'nonexitingadress';
  const { message } = t.throws(() => {
    attachListener.call({ whitelist: WHITELIST }, { origin });
  }, Error);

  t.is(message, `${origin} - is not included in whitelist`);
});

test('Should throw error on wrong isConnecter argument', (t) => {
  const { message } = t.throws(() => {
    Postmessage({ isConnecter: 'some', url: URL, whitelist: WHITELIST });
  }, Error);

  t.is(message, 'isConnecter - argument should be a boolean');
});

test('Should throw error on wrong url argument', (t) => {
  const { message } = t.throws(() => {
    Postmessage({ isConnecter: true, url: true, whitelist: WHITELIST });
  }, Error);

  t.is(message, 'url - argument should be a string');
});

test('Should throw error on wrong whitelist argument', (t) => {
  const { message } = t.throws(() => {
    Postmessage({ isConnecter: true, url: URL, whitelist: false });
  }, Error);

  t.is(message, 'whitelist - argument should be an array of url strings');
});

test('Assert attached event origin', (t) => {
  const self = {
    whitelist: WHITELIST,
    origin: '',
    events: {
      event: () => true,
    },
  };

  const origin = 'www.example.com';
  const data = 'event';

  attachListener.call(self, { origin, data });

  t.is(self.origin, origin);
});
