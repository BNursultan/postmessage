// @flow
import WeddingConstructor from './src/index';
import type { WeddingType, ConstructorType } from './src/types';
import { validateConstructor } from './src/helpers';

const Wedding = ({
  isConnecter = false,
  url = '',
  whitelist = [],
}: ConstructorType): ?WeddingType => {
  if (typeof window === 'undefined') {
    console.error('Connector does not work in SSR');
    return null;
  }

  // Validate before construct
  validateConstructor(isConnecter, url, whitelist);

  return new WeddingConstructor({ isConnecter, url, whitelist });
};

export default Wedding;
