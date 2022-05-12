#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git subtree push --prefix dist origin gh-pages