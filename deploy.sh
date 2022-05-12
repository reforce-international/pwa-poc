#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

rm -rf docs
mv dist docs
git add docs
git commit -m "chore: deploy new gh pages"
git push