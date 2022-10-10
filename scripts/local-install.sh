#!/bin/bash

echo '> Install functions dependencies:'
npm i link ../packages/cli/
cd functions
for d in */ ; do
  echo '>Install ' $d
  cd $d
  rm -r node_modules
  rm package-lock.json
  npm i link ../../../packages/firebase/
  npm i link ../../../packages/$d
  cd ..
done

cd ssr
npm i link ../../../packages/api/
npm i -D link ../../../packages/storefront/
cd ../../
pnpm i
npm run build


