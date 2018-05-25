import test from 'ava';
import './helpers/browser';
import { WHITELIST } from './helpers/fixtures';
import { attachListener } from '../src/helpers';

test('Should throw error on whitelist', (t) => {
  const origin = 'nonexitingadress';
  const { message } = t.throws(() => {
    attachListener.call({ whitelist: WHITELIST }, { origin });
  }, Error);

  t.is(message, `${origin} - is not included in whitelist`);
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
