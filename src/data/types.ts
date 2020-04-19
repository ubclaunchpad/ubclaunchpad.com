export interface Project {
  /**
   * human-readable name for project
   */
  name: string;

  /**
   * short one-line description of project
   */
  description: string;

  images: {
    /**
     * 640px by 320px banner image (or equivalent 2:1 image)
     */
    bannerURI?: string;
    /**
     * indicate if the banner has project name, and that a name should not be generated
     */
    bannerHasName?: boolean;
  };

  links: {
    /**
     * github repository link
     */
    repository: string;

    /**
     * link to deployed website if applicable
     */
    website?: string;

    /**
     * link to a blog post or writeup
     */
    writeup?: string;
  };
}

export interface Team {
  /**
   * team name!
   */
  name: string;
  /**
   * most recent project
   */
  project: Project;
}

export interface ClubPosition {
  /**
   * position name
   */
  name: string;
  /**
   * position description
   */
  description: string;
  /**
   * link to apply
   */
  applicationURL: string;
}

export type ClubSponsorTier = 'bronze' | 'silver' | 'gold' | 'platinum';

export interface ClubSponsor {
  /**
   * sponsor name
   */
  name: string;
  /**
   * how much support this sponsor provided
   */
  tier?: ClubSponsorTier;
  /**
   * must be PNG, transparent, ~ 140px by 120px
   */
  logoURL: string;
}
