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
test('Creates new instance with empty args', (t) => {
  const { message } = assertError(t);

  t.is(message, 'Please provide whitelist for connections');
});

test('Creates Connecter with no url args', (t) => {
  const { message } = assertError(t, { isConnecter: true });

  t.is(message, 'Please provide correct url for connections');
});

test('Is not constructer instance of Wedding constructor', (t) => {
  const instance = Wedding({ whitelist: WHITELIST });

  t.true(instance instanceof WeddingConstructor);
});

test('Is constructer instance of Wedding constructor', (t) => {
  const instance = Wedding({ isConnecter: true, url: URL, whitelist: WHITELIST });

  t.true(instance instanceof WeddingConstructor);
});
