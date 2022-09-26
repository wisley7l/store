import config from '@cloudcommerce/firebase/config';
<<<<<<< HEAD
=======
import { handler as ssrHandler } from './dist/server/entry.mjs';
>>>>>>> template/main
import mergeConfig from './config.json' assert { type: 'json' };

config.set({
  ...mergeConfig,
  hello: 'from store',
<<<<<<< HEAD
});

=======
  /*
  httpsFunctionOptions: {
    minInstances: 1,
  },
  */
});

global.ssr_handler = ssrHandler;

>>>>>>> template/main
export * from '@cloudcommerce/ssr/firebase';
