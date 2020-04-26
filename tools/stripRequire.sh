#!/bin/bash

# Remove require from a generated file, useful for scripts like generateRedirects.ts
awk '!/require/' ${FILE} > temp && mv temp ${FILE}
