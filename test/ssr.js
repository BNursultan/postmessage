import test from 'ava';
import { URL, WHITELIST } from './helpers/fixtures';
import Postmessage from '../main';

test('Should not run in ssr', (t) => {
  const Connecter = Postmessage({ isConnecter: true, url: URL, whitelist: WHITELIST });

  t.is(Connecter, null);
});
