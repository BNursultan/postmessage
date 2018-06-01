// @flow
import type { PostmessageType, ArgsType } from './src/types';
import Postmessage from './src/index';
import { validateConstructor } from './src/helpers';

export default ({
  isConnecter = false,
  url = '',
  whitelist = [],
  log = false,
}: ArgsType = {}): ?PostmessageType => {
  if (typeof window === 'undefined') {
    console.error('Connector does not work in SSR');
    return null;
  }

  // Validate before construct
  validateConstructor(isConnecter, url, whitelist);

  return new Postmessage({
    isConnecter,
    url,
    whitelist,
    log,
  });
};
