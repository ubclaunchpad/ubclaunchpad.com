# Contributing

This document will guide you through contributing changes to the new UBC Launch Pad website! It
assumes basic knowledge of git and pull request workflows.

- [Dependencies](#dependencies)
- [Development](#development)
- [Deployment](#deployment)

## Dependencies

The most important dependencies of this project are:

* [Node](https://nodejs.org), which powers all of our Javascript development locally
* [Vue.js](https://vuejs.org), a framework for building web interfaces
* [Bulma](https://bulma.io), a pure-CSS layout/component framework
* [animate.css](https://github.com/daneden/animate.css), a pure-CSS animation framework

To get started, make sure you have [Node](https://nodejs.org/en/download) installed:

```
node -v
npm install
```

You can then run the website locally by running the following and visiting [`localhost:8081`](http://localhost:8081):

```
npm run serve
```

## Development

This codebase is largely contained in [`src`](/src), where you will find the following directories:

* [`src/assets`](./src/assets): assets (images, etc.) that get bundled in the application
* [`src/components`](./src/components): Vue components that are shared throughout the website
* [`src/sections`](./src/sections): the website is mostly designed around horizontal sections that you scroll through - each section is defined as a Vue component here
* [`src/lib`](./src/lib): library of utility functions for Vue components
* [`src/data`](./src/data): data type definitions for configuration used in the website
* [`src/styles`](./src/styles): global styles are declared here and imported throughout the application

Also noteworthy are the following files:

* [`src/config.ts`](./src/config.ts): website configuration for frequently updated values - refer to the [Configuring the UBC Launch Pad Website](https://ubclaunchpad.github.io/new/config) documentation site for more details
* [`src/App.vue`](./src/App.vue): the main entrypoint component to the site - it currently declares the site layout and provides data from `src/config.ts` to relevant components (other components *should not* import `src/config.ts`)

Refer to [Dependencies](#dependencies) for our core dependencies and links to their websites, where you can find documentation on how to use them. Also refer to the existing code and components for guidance on how to work with the codebase.

Using `npm run serve`, code you write will automatically be visible at [`localhost:8081`](http://localhost:8081).

## Deployment

Deployments are currently simply based on the `/docs` folder in the `master` branch. To deploy your
change, make sure you run:

```
npm run build
```

And open a pull request on this repository with your changes. When your changes are merged, your
contribution will automatically be deployed!
