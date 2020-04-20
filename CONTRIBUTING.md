# ⚒️ Contributing to the UBC Launch Pad Website

This document will guide you through contributing changes to the new UBC Launch Pad website! It
assumes basic knowledge of git and pull request workflows.

- [Dependencies](#dependencies)
- [Development](#development)
  - [Vue Guidelines](#vue-guidelines)
    - [Documentation](#documentation)
    - [Styling](#styling)
  - [Configuration](#configuration)
- [Deployment](#deployment)

## Dependencies

The most important dependencies of this project are:

* [Node](https://nodejs.org), which powers all of our Javascript development locally
* [Vue.js](https://vuejs.org), a framework for building web interfaces
* [Bulma](https://bulma.io), a pure-CSS layout/component framework
* [animate.css](https://github.com/daneden/animate.css), a pure-CSS animation framework
* [Sass (`.scss` syntax)](https://sass-lang.com/documentation/syntax), a stylesheet language we use for styling

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

### Vue Guidelines

Most simple rules are enforced using [`eslint`](https://eslint.org/). Our `eslint` rules are defined in [`package.json`](./package.json). Additional advice is described here:

* Use [Vue single file components](https://vuejs.org/v2/guide/single-file-components.html).
* Stick to [`Vue.extend`](https://vuejs.org/v2/api/#Vue-extend) (and not class-based components).

#### Documentation

* Add a simple block docstring above `Vue.extend` for all components. For example:
  ```ts
  /**
   * About implements a section for introducing visitors to Launch Pad.
      */
  export default Vue.extend({
    name: 'About',
    props: {},
  });
  ```
* Shared components (`src/components`) should document their props as well with block docstrings:
  ```ts
  /**
   * Button is a simple stylized Launch Pad button.
    */
  export default Vue.extend({
    name: 'Button',
    props: {
      /**
       * Toggle whether to use a primary, attention-grabbing style or a more lowkey style for this button
        */
      primary: Boolean,
    },
  });
  ```

#### Styling

* Stylesheets should use [Sass (`.scss`) syntax](https://sass-lang.com/documentation/syntax).
* **Use existing classes wherever possible** - refer to the [Bulma](https://bulma.io) and [animate.css](https://github.com/daneden/animate.css) documentation for what is available. Other global styles are also available in [`src/styles`](./src/styles).
* Simple, non-specific styles (`margin`, `padding`, other modifiers) should be defined in [`src/styles`](./src/styles/util.scss).
* Vue declares a `<style />` section at the end of each single file component - use this and `scoped` styles for component-specific styles to avoid making unintentional changes to other components, for example:
  ```html
  <style scoped lang="scss">
  h2 {
    margin-bottom: 84px;
  }
  </style>
  ```

### Configuration

Site configuration is defined in [`src/config.ts`](./src/config.ts), with additional relevant types defined in [`src/data/types.ts`](./src/data/types.ts). Docstrings and types in these files are used to render the [UBC Launch Pad Site Configuration Guide](https://ubclaunchpad.github.io/new/config) as part of the post-build step to `npm run build` or by running:

```
npm run docs
```

You can view the configuration documentation site locally using a static file server like [`serve`](https://github.com/zeit/serve):

```
npm i -g serve
serve ./dist/config
```

These changes are published automatically - see [Deployment](#deployment).

## Deployment

Deployments are handled automatically by the [Deploy workflow](https://github.com/ubclaunchpad/new/actions?workflow=Deploy), which publishes changes to the `gh-pages` branch.

When your changes are merged, your contribution will automatically be deployed!
