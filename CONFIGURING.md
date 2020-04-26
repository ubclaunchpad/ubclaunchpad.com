# ⚙️ Configuring the UBC Launch Pad Website

> ⚠️ This page is meant to be read from the [UBC Launch Pad Configuration Guide](https://ubclaunchpad.github.io/new/config)!

<br />

Most frequently updated website values (recruitment status, teams, etc.) on the [UBC Launch Pad website](https://github.com/ubclaunchpad/new) can be updated by changing the values in [`src/config.ts`](https://github.com/ubclaunchpad/new/blob/master/src/config.ts), a configuration file written in TypeScript. This site describes the different settings available and guidance on what each value should be.

To make a change, simply edit the values in [`src/config.ts`](https://github.com/ubclaunchpad/new/blob/master/src/config.ts) based on the guidance in the type documentation on this website and open a pull request in [`ubclaunchpad/new`](https://github.com/ubclaunchpad/new). Your changes will be automatically deployed when your pull request is accepted and merged!

If something you want to change cannot be updated with `config.ts`, refer to [CONTRIBUTING.md](https://github.com/ubclaunchpad/new/blob/master/CONTRIBUTING.md) for more detailed documentation.

- [Examples](#examples)
  - [Configuring Recruitment Status](#configuring-recruitment-status)
- [Providing Images](#providing-images)

<br />

## Examples

### Configuring Recruitment Status

One example of an easily configurable component of the website is recruitment and applications information. To open applications for a new season, simply update [`recruitmentConfig`](/globals.html#recruitmentconfig) with the appropriate values, for example:

```diff
- season: 'Fall 2019'
+ season: 'Spring 2020'
```

```diff
- applicationsOpen: false
+ applicationsOpen: true
```

More details are available in the [`recruitmentConfig` documentation](/globals.html#recruitmentconfig).

## Providing Images

Many of the configuration options pertain to providing image assets through a URL. When providing such an URL, make sure the provided link is a *direct* link to the image, i.e. instead of:

```
https://github.com/ubclaunchpad/inertia/blob/master/.static/inertia-with-name.png
```
the link should look something like:

```
https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/inertia-with-name.png
```

On most browsers, you can get this link by right-clicking the image and selecting "Copy Image Location".

For the most part, avoid committing images to this repository to help prevent it from growing needlessly.

Note that in some cases, if you use the gif or similar format, provided images *can* be animated, which can look pretty cool in the right situations!

<br />

This site is generated using `npm run docs` from type definitions and inline documentation.
