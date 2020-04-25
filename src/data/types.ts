/**
 * Describes a Launch Pad project.
 */
export type Project = {
  /**
   * Human-readable name for project.
   */
  name: string;

  /**
   * Short one-line description of project.
   */
  description: string;

  images: {
    /**
     * Link to a **640px by 320px** banner image (or equivalent 2:1 image of reasonable resolution,
     * i.e. less than 1mb). This image should be hosted on the project repository or elswhere, and
     * NOT in this website's repository. Note that if you use the gif format, this image *can* be
     * animated, which looks pretty cool!
     *
     * Make sure the provided link is a *direct* link to the image, i.e. instead of:
     *
     * ```
     * https://github.com/ubclaunchpad/inertia/blob/master/.static/inertia-with-name.png
     * ```
     *
     * the link should look something like:
     *
     * ```
     * https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/inertia-with-name.png
     * ```
     *
     * On most browsers, you can get this link by right-clicking the image and selecting
     * "Copy Image Location".
     * 
     * Bonus: note that this image format is also used by GitHub to provide link previews when you
     * share your repository - just go to your repository's Settings and upload the same image under
     * the "Social preview" option.
     */
    bannerURI: string;
    /**
     * Indicate if the banner has project name, and that a name should not be generated on the website.
     */
    bannerHasName?: boolean;
  };

  links: {
    /**
     * Link to GitHub repository
     */
    repository: string;

    /**
     * Link to deployed website
     */
    website?: string;

     /**
     * If the project is an app link to the app and type of app. 
     */
    app?: {
      url?: string;
      appType: AppType;
    };

    /**
     * Link to a blog post or similar writeup
     */
    writeup?: string;
  };
}

/**
 * Describes a Launch Pad team.
 */
export type Team = {
  /**
   * Team name!
   */
  name: string;
  /**
   * The team's most recent/relevant project
   */
  project: Project;
}

/**
 * Describes a Launch Pad position (e.g. 'Developer', 'Designer')
 */
export type ClubPosition = {
  /**
   * Position name.
   */
  name: string;
  /**
   * Position description.
   */
  description: string;
  /**
   * Link to apply to this position.
   */
  applicationURL: string;
}

/**
 * Sponsorship tier achieved by a sponsor. Refer to the sponsorship package for more details.
 */
export type ClubSponsorTier = 'bronze' | 'silver' | 'gold' | 'platinum';

/**
 * Describes a club sponsor.
 */
export type ClubSponsor = {
  /**
   * Sponsor name.
   */
  name: string;
  /**
   * Link to sponsor website.
   */
  website: string;
  /**
   * How much support this sponsor provided - must be a string that satisfies one of [[`ClubSponsorTier`]].
   */
  tier?: ClubSponsorTier;
  /**
   * Sponsor logo - must be PNG, with transparent backgrounds, and roughly 140px by 120px. Try to
   * source these from online.
   *
   * To make simple adjustments to help the logo look better against the website's background, use
   * `logoFilter` to apply some simple CSS effects.
   */
  logoURL: string | any; // eslint-disable-line @typescript-eslint/no-explicit-any
  /**
   * Simple CSS filters for the sponsor logo - see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
   */
  logoFilter?: string;
}

export type ClubSocials = {
  instagram: string;
  facebook: string;
  medium: string;
  github: string;
  email: string;
}
/**
 * Describes the platform an app is build on.
 */
export type AppType = 'ios' | 'android';