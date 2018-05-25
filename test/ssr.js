import test from 'ava';
import { URL, WHITELIST } from './helpers/fixtures';
import Wedding from '../main';

test('Should not run in ssr', (t) => {
  const Connecter = Wedding({ isConnecter: true, url: URL, whitelist: WHITELIST });

  t.is(Connecter, null);
});
