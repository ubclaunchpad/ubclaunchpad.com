/**
 * This file contains configuration for most aspects of the website that might need frequent changing.
 *
 * It should **only** be imported by the main entrypoint to the website, `App.vue`. All other
 * components should accept *only* what they need as `props`, which `App.vue` will provide.
 *
 * Refer to `src/App.vue` for more details and examples.
 *
 * @packageDocumentation
 */

import { Team, ClubPosition, ClubSponsor, ClubSocials } from './data/types';

/* eslint-disable max-len */

/**
 * Recruitment configuration.
 *
 * @category Configuration
 */
export const recruitmentConfig: {
  season: string;
  applicationsOpen: boolean;
  positions: ClubPosition[];
} = {
  /**
   * Recruitment season name.
   */
  season: 'Fall 2020',

  /**
   * Toggle whether applications are open or not - this activates CTAs on the website for signup,
   * such as a 'Join Us' button and the 'Join Us' section.
   */
  applicationsOpen: true,

  /**
   * Define positions we are recruiting for.
   *
   * Each element must satisfy [[`ClubPosition`]].
   */
  positions: [
    {
      name: 'Developer',
      description:
        `Join our development team to improve your skills and resume. You have the basics down, but want
        to collaborate with a team to build awesome software and learn professional development practices.
        Realize your ideas with a dedicated project team, and learn
        from peers in a talented team of experienced designers and entrepreneurs. You're full
        of ideas and you're ready to guide the development of a project from
        conception to release.`,
      applicationURL: '',
    },
    {
      name: 'Designer',
      description:
        `Realize your design ideas with a dedicated project team, and learn
        from peers in a talented team of experienced designers. You're full
        of ideas and you're ready to guide the development of a project from
        conception to release.`,
      applicationURL: '',
    },
    {
      name: 'Business Strategist',
      description:
        `Bring an entrepreneurial flair to a team of designers and developers to create awesome projects.
        Develop industry relationships and insight while securing funding and sponsorships.
        Work closely with partners to organize and market events that aim to benefit UBC's tech
        community.`,
      applicationURL: '',
    },
  ],
};

/**
 * Club configuration (teams, members, etc.)
 *
 * @category Configuration
 */
export const clubConfig: {
  memberCount: number;
  currentTeams: Team[];
  featuredTeams: Team[];
  socials: ClubSocials;
} = {
  /**
   * The current club member membership count.
   */
  memberCount: 50,

  /**
   * The current or most recent active Launch Pad teams and their primary project.
   *
   * Each element must satisfy [[`Team`]].
   */
  currentTeams: [
    {
      name: 'Sync',
      project: {
        name: 'Sync',
        description: '📺 Watch YouTube videos interactively in sync with friends',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/sync/master/.static/banner.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/sync',
          website: 'https://thesyncapp.herokuapp.com/',
          writeup: 'https://github.com/ubclaunchpad/sync/blob/showcase/README.md',
        },
      },
    },
    {
      name: 'Physio Space',
      project: {
        name: 'Physio Space',
        description: 'The physio that’s always at your side',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/physiospace-react/master/showcasethumbnail_PhysioSpace.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/physiospace-react',
          website:'https://thephysio.space/',
          writeup:'https://github.com/ubclaunchpad/physiospace-react/blob/master/README.md',
        },
      },
    },
    {
      name: 'Footprint',
      project: {
        name: 'Footprint',
        description: '🍃 Learn how the food you eat impacts your carbon footprint ',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/Footprint/master/project_images/final_design.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/Footprint',
          writeup: 'https://github.com/ubclaunchpad/Footprint/blob/master/README.md',
        },
      },
    },
    {
      name: 'ubcsim2',
      project: {
        name: 'UBC Simulator 2',
        description: '💭 A \'choose your own adventure\' style browser game where the player attempts to survive a year as a student at UBC',
        elevatorPitch: '',
        banner: {
          // TODO: update this when https://github.com/ubclaunchpad/ubcsim2/pull/140 is merged
          url: 'https://raw.githubusercontent.com/ubclaunchpad/ubcsim2/115b59fcc1a26fb478d64f66363548dcdfa39643/.static/thumbnail.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/ubcsim2',
          website: 'https://ubclaunchpad.github.io/ubcsim2',
        },
      },
    },
    {
      name: 'food-doods',
      project: {
        name: 'keepfresh',
        description: 'Dabbing out food waste and over-spending on groceries',
        elevatorPitch: '',
        banner: {
          // TODO: update when https://github.com/ubclaunchpad/food-doods/tree/showcase is merged
          url: 'https://raw.githubusercontent.com/ubclaunchpad/food-doods/showcase/photos/keepfresh-thumbnail.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/food-doods',
        },
      },
    },
    {
      name: 'AccessYouth',
      project: {
        name: 'Access Youth',
        description: 'Supporting youth outreach and empowerment by facilitating easier communication between Access Youth (NPO) and troubled youth',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/accessyouth-api/fb271fc2fad9a89a637f58769408ea4efea0faf0/Thumbnail.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/accessyouth-api',
          writeup: 'https://github.com/ubclaunchpad/accessyouth-api#access-youth-mobile---our-experience-building-this',
        },
      },
    },
  ],

  /**
   * Feature past teams and their projects.
   *
   * Each element must satisfy [[`Team`]].
   */
  featuredTeams: [
    {
      name: 'Inertia',
      project: {
        name: 'Inertia',
        description: '✈️ Effortless, self-hosted continuous deployment',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/banner.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/inertia',
          website: 'https://inertia.ubclaunchpad.com',
          writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/building-continuous-deployment-87a2bd8eedbe',
        },
      },
    },
    {
      name: 'Brussel Sprouts',
      project: {
        name: 'Rocket 2',
        description: '🚀 Slack bot, team management, and onboarding system for UBC Launch Pad',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/rocket2/master/docs/rocket-banner.gif',
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/rocket2',
          website: 'https://rocket2.readthedocs.io',
        },
      },
    },
    {
      name: 'Bumper',
      project: {
        name: 'Bumper',
        description: '🥊 Fast-paced multiplayer arcade game, built with Go, Javascript, and WebSockets',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/bumper/master/.static/bumper-small.gif',
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/bumper',
        },
      },
    },
    {
      name: 'Minutes',
      project: {
        name: 'Minutes',
        description: '🔭 Speaker diarization via transfer learning',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/minutes/master/.static/spec.png',
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/minutes',
          writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/speaker-diarisation-using-transfer-learning-47ca1a1226f4',
        },
      },
    },
    {
      name: 'Cumulus',
      project: {
        name: 'Cumulus',
        description: '💸 Cryptocurrency that doesn\'t waste your time',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/cumulus/dev/.static/banner.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/cumulus',
          writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/introducing-cumulus-940456b7e05c',
        },
      },
    },
    {
      name: 'UBC Launch Pad Website',
      project: {
        name: 'ubclaunchpad.com',
        description: '✨ the new UBC Launch Pad website!',
        elevatorPitch: '',
        banner: {
          url: require('../.static/homepage.png') as string,
          hasName: true, // this one should be self-explanatory
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
        },
      },
    },
    {
      name: 'Etch',
      project: {
        name: 'etch.space',
        description: '📝 A live multi-user collaborative etch-a-sketch built on websockets',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/etch.space/master/banner.png',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/etch.space',
        },
      },
    },
    {
      name: 'Eat',
      project: {
        name: 'Eat',
        description: 'Should we eat 🌮, 🍟, or 🍣?',
        elevatorPitch: '',
        banner: {
          url: 'https://raw.githubusercontent.com/ubclaunchpad/eat/master/Images/animated-banner.gif',
          hasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/eat',
          website: 'https://apps.apple.com/ca/app/eat-now-find-where-to-eat/id1366648100',
        },
      },
    },
  ],

  /**
   * Links to Launch Pad online!
   */
  socials: {
    instagram: 'https://www.instagram.com/ubclaunchpad',
    facebook: 'https://www.facebook.com/ubclaunchpad',
    medium: 'https://medium.com/ubc-launch-pad-software-engineering-blog',
    github: 'https://github.com/ubclaunchpad',
    email: 'team@ubclaunchpad.com',
  },
};

/**
 * Sponsorship configuration.
 *
 * @category Configuration
 */
export const sponsorshipConfig: {
  packageURL: string;
  sponsors: ClubSponsor[];
} = {
  /**
   * Link to the most recent sponsorship package.
   */
  packageURL: 'TODO',

  /**
   * Current sponsors.
   *
   * Each element must satisfy [[`ClubSponsor`]].
   */
  sponsors: [
    {
      name: 'Axiom Zen',
      website: 'https://www.axiomzen.co/',
      tier: 'gold',
      logo: {
        url: 'https://res.cloudinary.com/dfgx570fg/image/upload/w_700,h_700,c_limit/v1468362472/f2ed2lbpqujvxa8r6zux.png',
        filter: 'invert()',
      },
    },
    {
      name: 'East Side Game Studio',
      website: 'https://www.eastsidegames.com/',
      tier: 'gold',
      logo: {
        url: 'https://www.eastsidegames.com/wp-content/themes/esgnew/img/logo-final.png',
        filter: 'invert() grayscale(0.5)',
      },
    },
    {
      name: 'Cisco',
      website: 'https://www.cisco.com/',
      tier: 'gold',
      logo: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
      },
    },
    {
      name: 'GitHub',
      website: 'https://github.com',
      logo: {
        url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png',
        filter: 'invert()',
      },
    },
  ],
};
