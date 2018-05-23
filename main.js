import WeddingConstructor from './src/index';
import { validateConstructor } from './src/helpers';

const Wedding = ({
  isConnecter = false,
  url = '',
  whitelist = [],
} = {}) => {
  // Validate before construct
  if (!validateConstructor(isConnecter, url, whitelist)) {
    return null;
  }

  return new WeddingConstructor({ isConnecter, url, whitelist });
};

export default Wedding;
