/**
 * Shims for the Node API (https://nodejs.org/dist/latest-v12.x/docs/api/) for tools in /tools to use,
 * without having to install the entirety of @types/node. To use it:
 * 
 *    // eslint-disable-next-line @typescript-eslint/triple-slash-reference
 *    /// <reference path="./node.d.ts" />
 *    import { writeFileSync } from 'fs';
 *
 */

declare module 'fs';
