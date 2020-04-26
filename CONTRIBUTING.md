# ⚒️ Contributing to the UBC Launch Pad Website

This document will guide you through contributing changes to the new UBC Launch Pad website! It assumes basic knowledge of git and pull request workflows. If you are looking for *what* you can contribute, see:

* [our issue tracker](https://github.com/ubclaunchpad/ubclaunchpad.com/issues)
* [TODOs in the codebase](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/ubclaunchpad/ubclaunchpad%5C.com%24+TODO+-file:.md&patternType=literal)

If you spot anything out of date or incorrect, please [open an issue](https://github.com/ubclaunchpad/ubclaunchpad.com/issues)!

<br />

**Table of Contents**

- [Dependencies](#dependencies)
  - [npm Dependencies](#npm-dependencies)
- [Development](#development)
  - [TypeScript Guidelines](#typescript-guidelines)
  - [Vue Guidelines](#vue-guidelines)
    - [Documentation](#documentation)
    - [Styling](#styling)
      - [Responsive Design](#responsive-design)
  - [Handling Assets](#handling-assets)
  - [Analytics](#analytics)
  - [Configuration](#configuration)
- [Deployment](#deployment)
- [GitHub Actions](#github-actions)

<br />

## Dependencies

The most important dependencies of this project are:

* [Node](https://nodejs.org), which powers all of our Javascript development locally
* [TypeScript](https://www.typescriptlang.org/), a typed superset of JavaScript
* [Vue.js](https://vuejs.org), a framework for building web interfaces
* [Bulma](https://bulma.io), a pure-CSS layout/component framework
* [animate.css](https://github.com/daneden/animate.css), a pure-CSS animation framework
* [Sass (`.scss` syntax)](https://sass-lang.com/documentation/syntax), a stylesheet language we use for styling

To get started, make sure you have [Node](https://nodejs.org/en/download) installed:

```sh
node -v
npm ci  # install dependencies strictly with our lockfile
```

You can then run the website locally by running the following and visiting [`localhost:8081`](http://localhost:8081):

```
npm run serve
```

Refer to the links above for more details on each dependency.

### npm Dependencies

[npm](https://docs.npmjs.com/about-npm/) is a package registry for JavaScript/Typescript/etc libraries. Our npm dependencies are declared in [`package.json`](./package.json), with resolved versions tracked in [`package-lock.json`](./package-lock.json).

In general, when declaring dependencies in `package.json`, use the [`~` operator](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept), which specifies that the `npm install` should only update patch dependencies.

Note that `npm install` *can* change dependencies in `package-lock.json` - in general, use `npm ci` to install dependencies unless explicitly performing an update.

<br />

## Development

[Visual Studio Code](https://code.visualstudio.com/) with extensions like [Veter](https://marketplace.visualstudio.com/items?itemName=octref.vetur) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is recommended.

This codebase is largely contained in [`src`](/src), where you will find the following directories:

* [`src/assets`](./src/assets): assets (images, etc.) that get bundled in the application - see [Handling Assets](#handling-assets) for more details
* [`src/components`](./src/components): Vue components that are shared throughout the website
* [`src/sections`](./src/sections): the website is mostly designed around horizontal sections that you scroll through - each section is defined as a Vue component here
* [`src/lib`](./src/lib): library of utility functions for Vue components
* [`src/data`](./src/data): data type definitions for configuration used in the website - see [Configuration](#configuration) for more details
* [`src/styles`](./src/styles): global styles are declared here and imported throughout the application

Also noteworthy are the following files:

* [`src/config.ts`](./src/config.ts): website configuration for frequently updated values - refer to the [Configuring the UBC Launch Pad Website](https://ubclaunchpad.com/config) documentation site and [Configuration](#configuration) for more details
* [`src/App.vue`](./src/App.vue): the main entrypoint component to the site - it currently declares the site layout and provides data from `src/config.ts` to relevant components (other components *should not* import `src/config.ts`)

Refer to [Dependencies](#dependencies) for our core dependencies and links to their websites, where you can find documentation on how to use them. Also refer to the existing code and components for guidance on how to work with the codebase.

Using `npm run serve`, code you write will automatically be visible at [`localhost:8081`](http://localhost:8081).

### TypeScript Guidelines

[TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript, and is used as the main programming language in this project.

Most simple style rules are enforced using [`eslint`](https://eslint.org/). Our `eslint` rules are defined in [`package.json`](./package.json). In general:

* always use `<script lang="ts">` in Vue components.
* always use `.ts` when adding additional source files.
* follow documentation formats used by existing code in the repository.

### Vue Guidelines

[Vue.js](https://vuejs.org) is a framework for building web interfaces, and is the framework that drives this project.

In general, when working with Vue:

* use [Vue single file components](https://vuejs.org/v2/guide/single-file-components.html) defined in `.vue` files.
* stick to [`Vue.extend`](https://vuejs.org/v2/api/#Vue-extend) (and not class-based components) - see [examples](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/ubclaunchpad/ubclaunchpad%5C.com%24+Vue.extend+lang:vue&patternType=literal)

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

See [examples](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/ubclaunchpad/ubclaunchpad%5C.com%24+%3Cstyle+lang:vue&patternType=literal).

##### Responsive Design

There are several strategies to handle responsiveness (in other words, how well the website scales onto smaller/larger screens):

* [Bulma](https://bulma.io) has a variety of [helpers](https://bulma.io/documentation/modifiers/responsive-helpers/) for implementing responsiveness, and each Bulma component likely has a few modifiers to handle scaling on various screen sizes - see their respective class documentation for more details.
  * Bulma hide/show helpers (`is-hidden-` classes) are particularly useful for hiding/showing alternative layouts on different screen sizes - see [examples](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/ubclaunchpad/ubclaunchpad%5C.com%24+is-hidden-+lang:vue&patternType=literal)
* [`variables.scss`](./src/styles/variables.scss) has definitions for breakpoints (`$tablet`, `$touch`, etc.) that you can use with `@media` queries in your styles to define screen-size-specific properties - see [examples](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/ubclaunchpad/ubclaunchpad%5C.com%24+%40media+lang:vue&patternType=literal).

### Handling Assets

Image assets are kept in [`src/assets`](./src/assets), and are bundled alongside our code during build time. To reference images in Vue:

```html
<img src="@/assets/my-image.png">
```

To load an image to use it as a variable, use `require` and bind it to `src`:

```vue
<template>
  <img :src="myImage">
</template>

<script lang="ts">
import Vue from 'vue';

const myImage = require('@/assets/my-image.png');

export default Vue.extend({
  // ...
  data: () => ({ myImage }),
  // ...
})
</script>
```

See [examples](https://sourcegraph.com/search?q=repo:%5Egithub%5C.com/ubclaunchpad/ubclaunchpad%5C.com%24+%40/assets+lang:vue&patternType=literal).

In general:

* if the image can be hosted elsewhere (i.e. a company website or project repository), host it there instead and reference it by URL
* use suitably-sized assets that don't exceed 1MB in size
* do not put assets in `/public`
* **icons**: see [`unicons.ts`](./src/unicons.ts).

We also have an [automated workflow](https://github.com/ubclaunchpad/ubclaunchpad.com/actions?workflow=Compress+images) that runs on PRs that edit images and automatically adds a commit to compress them if possible while minimizing quality loss - see [GitHub Actions](#github-actions).

### Analytics

We use [Google Analytics](https://analytics.google.com/analytics/web) to log events. In general, track interesting actions as [events](https://support.google.com/analytics/answer/1033068), and use the following scheme:

```ts
this.$gtag.event(
  'my-action-name', // name of event, namespaced if appropriate - such as 'project-modal-link-click'
  {
    event_category: 'section-name', // name of section or part of website - be consistent with this
    event_label: 'Some Value', // value associated with event, such as a team name 
  },
);
```

The library we use for this is [`vue-gtag`](https://matteo-gabriele.gitbook.io/vue-gtag/), and the client is available through `this.$gtag` in Vue. Analytics are available under the `team@ubclaunchpad.com` account in [Google Analytics](https://analytics.google.com/analytics/web).

### Configuration

Site configuration is defined in [`src/config.ts`](./src/config.ts), with additional relevant types defined in [`src/data/types.ts`](./src/data/types.ts). Docstrings and types in these files are used to render the [UBC Launch Pad Site Configuration Guide](https://ubclaunchpad.com/config) as part of the post-build step to `npm run build` or by running:

```
npm run docs
```

Included in this documentation website is [CONFIGURING.md](./CONFIGURING.md), where any updated guidance regarding the configuration of the website should be added.

You can view the configuration documentation site locally using a static file server like [`serve`](https://github.com/zeit/serve):

```
npm i -g serve
serve ./dist/config
```

These changes are published automatically - see [Deployment](#deployment).

<br />

## Deployment

Deployments are handled automatically by the [Netlify](https://www.netlify.com/).

This means that when your changes are merged to `master`, your contribution will automatically be deployed! This deployment includes both the actual website as well as [configuration documentation](#configuration).

Also note that individual pull requests also get their own preview deployment - you can find a link by clicking on "Details" next to the `deploy/netlify` check at the bottom of your pull request:

![deploy preview](./.static/deploy-preview.png)

<br />

## GitHub Actions

[GitHub Actions](https://github.com/features/actions) is a workflow automation platform provided by GitHub. We use it for automating a variety of tasks for this project.

* [![Checks](https://github.com/ubclaunchpad/ubclaunchpad.com/workflows/Checks/badge.svg)](https://github.com/ubclaunchpad/ubclaunchpad.com/actions?workflow=Checks) ([`checks.yml`](./.github/workflows/checks.yml)) runs on every single pull request to run linters and verify the website builds correctly. Every pull request should pass these checks.
* [![Compress images](https://github.com/ubclaunchpad/ubclaunchpad.com/workflows/Compress%20images/badge.svg)](https://github.com/ubclaunchpad/ubclaunchpad.com/actions?workflow=Compress+images) ([`compress.yml`](./.github/workflows/compress.yml)) runs on pull requests that modify image assets and, if possible, compresses them without losing too much quality. You should still only add images of suitable size regardless - see [Handling Assets](#handling-assets).

<br />
