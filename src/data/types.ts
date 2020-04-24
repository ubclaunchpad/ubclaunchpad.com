/**
 * Describes a video.
 */
export type MediaVideo = {
  type: 'video';
  url: string;
};

/**
 * Describes an image.
 */
export type MediaImage = {
  type: 'image';
  url: string;
};

/**
 * Describes a Launch Pad project.
 */
export type Project = {
  /**
   * Human-readable name for project.
   */
  name: string;
  /**
   * Super short one-line description about this project, around 5-10 words.
   */
  description: string;
  /**
   * Two or three sentences diving into your project - what does it do? How does it do it?
   */
  elevatorPitch: string;
  /**
   * Small **640px by 320px** banner image (or equivalent 2:1 image of reasonable resolution,
   * i.e. less than 1mb) for featuring your project.
   * 
   * Bonus: note that this image format is also used by GitHub to provide link previews when you
   * share your repository - just go to your repository's Settings and upload the same image under
   * the "Social preview" option.
   */
  banner: {
    url: string;
    /**
     * Indicate if the banner has project name, and that a name should not be generated on the website.
     */
    hasName?: boolean;
  };
  /**
   * Detailed or more descriptive media to showcase your project - featured in project modals.
   * 
   * This can be one of:
   * - video (`type: 'video'` - see [[`MediaVideo`]])
   * - image (`type: 'iamge'` - see [[`MediaImage`]])
   */
  media?: MediaVideo | MediaImage;
  /**
   * Links to further information about this project.
   */
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
   * How much support this sponsor provided. Refer to the sponsorship package for more details.
   */
  tier?: 'bronze' | 'silver' | 'gold' | 'platinum';
  /**
   * Sponsor logo - must be PNG, with transparent backgrounds, and roughly 140px by 120px. Try to
   * source these from online.
   *
   * To make simple adjustments to help the logo look better against the website's background, use
   * `logoFilter` to apply some simple CSS effects.
   */
  logo: {
    url: string;
    /**
     * Simple CSS filters for the sponsor logo - see https://developer.mozilla.org/en-US/docs/Web/CSS/filter
     */
    filter?: string;
  };
}

/**
 * Describes set of links to Launch Pad online.
 */
export type ClubSocials = {
  instagram: string;
  facebook: string;
  medium: string;
  github: string;
  email: string;
}
