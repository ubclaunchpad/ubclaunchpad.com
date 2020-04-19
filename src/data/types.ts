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
  name: string;
  // most recent project
  project: Project;
}
