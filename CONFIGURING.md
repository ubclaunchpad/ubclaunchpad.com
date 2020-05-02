# ⚙️ Configuring the UBC Launch Pad Website

> ⚠️ This page is meant to be read from the [Site Configuration Guide website](https://ubclaunchpad.com/config)!

<br />

Most frequently updated website values (recruitment status, featured projects, etc.) on the [UBC Launch Pad website](https://github.com/ubclaunchpad/ubclaunchpad.com) can be updated by changing the values in [`src/config.ts`](https://github.com/ubclaunchpad/ubclaunchpad.com/blob/master/src/config.ts), a configuration file written in [TypeScript](https://www.typescriptlang.org/). This site describes the different configuration options available and guidance on what each value should be.

To make a change, simply edit the values in [`src/config.ts`](https://github.com/ubclaunchpad/ubclaunchpad.com/blob/master/src/config.ts) based on the guidance in the type documentation on this website and open a pull request in [`ubclaunchpad/ubclaunchpad.com`](https://github.com/ubclaunchpad/ubclaunchpad.com). Your changes will be automatically deployed when your pull request is accepted and merged!

If something you want to change that cannot be configured with `config.ts`, refer to the [contribution guide](https://github.com/ubclaunchpad/ubclaunchpad.com/blob/master/CONTRIBUTING.md) for more detailed documentation on making changes to the website.

- [Examples](#examples)
  - [Configuring Recruitment Status](#configuring-recruitment-status)
  - [Adding a Custom Redirect](#adding-a-custom-redirect)
  - [Updating Projects on the Website](#updating-projects-on-the-website)
- [Providing Images](#providing-images)
- [Verifying Changes](#verifying-changes)

<br />

## Examples

### Configuring Recruitment Status

One example of an easily configurable component of the website is recruitment and applications information. To open applications for a new season, simply update [`recruitmentConfig`](#recruitmentconfig) with the appropriate values, for example:

```diff
- season: 'Fall 2019'
+ season: 'Spring 2020'
```

```diff
- applicationsOpen: false
+ applicationsOpen: true
```

More details are available in the [`recruitmentConfig` documentation](#recruitmentconfig).

### Adding a Custom Redirect

When preparing an event, you might want to be able to share `https://ubclaunchpad.com/my-amazing-event` as a nicer URL for people to access, which could then redirect them to another website. To add such a redirect, just add a new [`Redirect`](#redirect) to [`redirectsConfig`](#redirectsconfig):

```ts
{
  path: '/my-amazing-event',
  target: 'https://my-amazing-event-website.com',
}
```

Also refer to [USING.md](https://github.com/ubclaunchpad/ubclaunchpad.com/blob/master/USING.md#redirect-links) for more details. You can also check [`redirects.txt`](https://ubclaunchpad.com/redirects.txt) for a full list of currently active redirects.

### Updating Projects on the Website

Projects featured on the website are configured in [`clubConfig`](#clubconfig) under `clubConfig.currentProjects` and `clubConfig.featuredProjects`, which currently provides the projects in the "Teams" and "Past Projects" sections of the website respectively.

To make a change, simply add/remove/update one of the entries in `clubConfig.currentProjects` or `clubConfig.featuredProjects` - see the [`Project`](#project) type for more details.

<br />

## Providing Images

Many of the configuration options pertain to providing image assets through a URL (for the most part, avoid committing images to this repository to help prevent it from growing needlessly). When providing such an URL, make sure the provided link is a *direct* link to the image, i.e. instead of:

```
https://github.com/ubclaunchpad/inertia/blob/master/.static/inertia-with-name.png
```

the link should look something like:

```
https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/inertia-with-name.png
```

On most browsers, you can get this link by right-clicking the image and selecting "Copy Image Location".

Be wary of the image size! Large images load slowly and can directly impact the experience of using the website - try an online image compressor, such as [compresspng](https://compresspng.com/), to keep file sizes to <100kB.

Note that in some cases, if you use the gif or similar format, provided images *can* be animated, which looks pretty cool in the right situations!

<br />

## Verifying Changes

When you open a pull request, [Netlify will automatically deploy a preview website for us](https://github.com/ubclaunchpad/ubclaunchpad.com/blob/master/CONTRIBUTING.md#deployment), where we can verify the output of a configuration change.

To check how changes look locally, refer to the [contribution guide](https://github.com/ubclaunchpad/ubclaunchpad.com/blob/master/CONTRIBUTING.md).

<br />

*This documentation site is [generated using `npm run docs`](https://github.com/ubclaunchpad/ubclaunchpad.com/blob/master/CONTRIBUTING.md#configuration) from type definitions and inline documentation.*
