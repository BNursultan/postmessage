import test from 'ava';
import './helpers/browser';
import { URL, WHITELIST } from './helpers/fixtures';
import Postmessage from '../main';
import PostmessageConstructor from '../src/index';

function assertError(t, args) {
  return t.throws(() => {
    Postmessage(args);
  }, Error);
}

// Main
// TODO: do better tests
test('Should throw errors on empty args', (t) => {
  const { message } = assertError(t);

  t.is(message, 'Please provide whitelist for connections');
});

test('Should throw errors on empty url args', (t) => {
  const { message } = assertError(t, { isConnecter: true });

  t.is(message, 'Please provide correct url for connections');
});

test('Assers non constructer instance of Postmessage constructor', (t) => {
  const instance = Postmessage({ whitelist: WHITELIST });

  t.true(instance instanceof PostmessageConstructor);
});

test('Asserts constructer instance of Postmessage constructor', (t) => {
  const instance = Postmessage({ isConnecter: true, url: URL, whitelist: WHITELIST });

  t.true(instance instanceof PostmessageConstructor);
});
