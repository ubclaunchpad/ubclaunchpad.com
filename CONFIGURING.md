# ⚙️ Configuring the UBC Launch Pad Website

> ⚠️ This page is meant to be read from the [UBC Launch Pad Configuration Guide](https://ubclaunchpad.github.io/new/config)!

<br />

Most frequently updated website values (recruitment status, teams, etc.) on the [UBC Launch Pad website](https://github.com/ubclaunchpad/new) can be updated by changing the values in [`src/config.ts`](https://github.com/ubclaunchpad/new/blob/master/src/config.ts), a configuration file written in TypeScript. This site describes the different settings available and guidance on what each value should be.

To make a change, simply edit the values in [`src/config.ts`](https://github.com/ubclaunchpad/new/blob/master/src/config.ts) based on the guidance in the type documentation on this website and open a pull request in [`ubclaunchpad/new`](https://github.com/ubclaunchpad/new). Your changes will be automatically deployed when your pull request is accepted and merged!

If something you want to change cannot be updated with `config.ts`, refer to [CONTRIBUTING.md](https://github.com/ubclaunchpad/new/blob/master/CONTRIBUTING.md) for more detailed documentation.

<br />

This site is generated using `npm run docs` from type definitions and inline documentation.
