#!/bin/bash

# Remove require from a generated file, useful for scripts like generateRedirects.ts
#
# This is needed because we `require` image assets, which are nicely handled by Webpack, but for
# scripts they don't work, and aren't needed.
#
# Usage:
#    FILE='bin/src/config.js' ./tools/stripRequire.sh

awk '!/require/' ${FILE} > temp && mv temp ${FILE}
