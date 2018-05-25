import test from 'ava';
import './helpers/browser';
import { WHITELIST } from './helpers/fixtures';
import { attachListener } from '../src/helpers';

function assertError(t, args) {
  return t.throws(() => {
    attachListener.call({ whitelist: WHITELIST }, args);
  }, Error);
}

test('Should throw error on whitelist', (t) => {
  const origin = 'nonexitingadress';
  const { message } = assertError(t, { origin });

  t.is(message, `${origin} - is not included in whitelist`);
});
