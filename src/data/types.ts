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
     * 640px by 320px banner image (or equivalent 2:1 image). Should be hosted on the project
     * repository or elswhere, and NOT in this website repository.
     * 
     * If using an image in a repository, make sure it is a direct link to the image, i.e. instead of:
     * 
     *    https://github.com/ubclaunchpad/inertia/blob/master/.static/inertia-with-name.png
     * 
     * the link should be:
     * 
     *    https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/inertia-with-name.png
     * 
     * On most browsers, you can do this by right-clicking the image and selecting "Copy Image Location".
     */
    bannerURI?: string;
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
   * How much support this sponsor provided - must be a string that satisfied one of [[`ClubSponsorTier`]].
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
