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
