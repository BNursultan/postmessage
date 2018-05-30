// @flow
import type { WeddingType, ArgsType } from './src/types';
import Wedding from './src/index';
import { validateConstructor } from './src/helpers';

export default ({
  isConnecter = false,
  url = '',
  whitelist = [],
}: ArgsType = {}): ?WeddingType => {
  if (typeof window === 'undefined') {
    console.error('Connector does not work in SSR');
    return null;
  }

  // Validate before construct
  validateConstructor(isConnecter, url, whitelist);

  return new Wedding({ isConnecter, url, whitelist });
};
