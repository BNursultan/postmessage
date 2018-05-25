import test from 'ava';
import './helpers/browser';
import { URL, WHITELIST } from './helpers/fixtures';
import Wedding from '../main';
import WeddingConstructor from '../src/index';

function assertError(t, args) {
  return t.throws(() => {
    Wedding(args);
  }, Error);
}

// Main
test('Should throw errors on empty args', (t) => {
  const { message } = assertError(t);

  t.is(message, 'Please provide whitelist for connections');
});

test('Should throw errors on empty url args', (t) => {
  const { message } = assertError(t, { isConnecter: true });

  t.is(message, 'Please provide correct url for connections');
});

test('Assers non constructer instance of Wedding constructor', (t) => {
  const instance = Wedding({ whitelist: WHITELIST });

  t.true(instance instanceof WeddingConstructor);
});

test('Asserts constructer instance of Wedding constructor', (t) => {
  const instance = Wedding({ isConnecter: true, url: URL, whitelist: WHITELIST });

  t.true(instance instanceof WeddingConstructor);
});
