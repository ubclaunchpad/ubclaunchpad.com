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
        description: ':tv: Watch YouTube videos interactively in sync with friends',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/sync/master/.static/banner.png',
          bannerHasName: true,
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
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/physiospace-react/master/showcasethumbnail_PhysioSpace.png',
          bannerHasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/physiospace-react',
          website:'https://thephysio.space/',
          writeup:'https://github.com/ubclaunchpad/physiospace-react/blob/master/README.md',
        },
      },
    },
    {
      name: 'Team3',
      project: {
        name: 'Placeholder3',
        description: '',
        images: {
          bannerURI: undefined,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
        },
      },
    },
    {
      name: 'Team4',
      project: {
        name: 'Placeholder4',
        description: '',
        images: {
          bannerURI: undefined,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
        },
      },
    },
    {
      name: 'Team5',
      project: {
        name: 'Placeholder5',
        description: '',
        images: {
          bannerURI: undefined,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
        },
      },
    },
    {
      name: 'Team6',
      project: {
        name: 'Placeholder6',
        description: '',
        images: {
          bannerURI: undefined,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
        },
      },
    },
    {
      name: 'Team7',
      project: {
        name: 'Placeholder7',
        description: '',
        images: {
          bannerURI: undefined,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
        },
      },
    },
    {
      name: 'Team8',
      project: {
        name: 'Placeholder8',
        description: '',
        images: {
          bannerURI: undefined,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
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
      name: 'Brussel Sprouts',
      project: {
        name: 'Rocket 2',
        description: '🚀 Slack bot, team management, and onboarding system for UBC Launch Pad',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/rocket2/master/docs/rocket-banner.gif',
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/rocket2',
          website: 'https://rocket2.readthedocs.io',
        },
      },
    },
    {
      name: 'Minutes',
      project: {
        name: 'Minutes',
        description: ':telescope: Speaker diarization via transfer learning',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/minutes/master/.static/spec.png',
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/minutes',
          writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/speaker-diarisation-using-transfer-learning-47ca1a1226f4',
        },
      },
    },
    {
      name: 'Inertia',
      project: {
        name: 'Inertia',
        description: ':airplane: Effortless, self-hosted continuous deployment',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/banner.png',
          bannerHasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/inertia',
          website: 'https://inertia.ubclaunchpad.com',
          writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/building-continuous-deployment-87a2bd8eedbe',
        },
      },
    },
    {
      name: 'Eat',
      project: {
        name: 'Eat',
        description: 'Should we eat 🌮, 🍟, or 🍣?',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/eat/master/Images/eatnow.png',
          bannerHasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/eat',
          website: 'https://apps.apple.com/ca/app/eat-now-find-where-to-eat/id1366648100',
        },
      },
    },
    {
      name: 'Bumper',
      project: {
        name: 'Bumper',
        description: '🥊 Fast-paced multiplayer arcade game, built with Go, Javascript, and WebSockets',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/bumper/master/.static/bumper.gif',
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/bumper',
        },
      },
    },
    {
      name: 'Cumulus',
      project: {
        name: 'Cumulus',
        description: '💸 Cryptocurrency that doesn\'t waste your time',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/cumulus/dev/.static/banner.png',
          bannerHasName: true,
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/cumulus',
          writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/introducing-cumulus-940456b7e05c',
        },
      },
    },
    {
      name: 'Etch',
      project: {
        name: 'etch.space',
        description: ':memo: A live multi-user collaborative etch-a-sketch built on websockets',
        images: {
          bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/etch.space/master/logo.png',
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/etch.space',
        },
      },
    },
    {
      name: 'UBC Launch Pad Website',
      project: {
        name: 'ubclaunchpad.com',
        description: '✨ the new UBC Launch Pad website!',
        images: {
          bannerURI: require('../.static/homepage.png'),
          bannerHasName: true, // this one should be self-explanatory
        },
        links: {
          repository: 'https://github.com/ubclaunchpad/new',
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
      logoURL: 'https://res.cloudinary.com/dfgx570fg/image/upload/w_700,h_700,c_limit/v1468362472/f2ed2lbpqujvxa8r6zux.png',
      logoFilter: 'invert()',
    },
    {
      name: 'East Side Game Studio',
      website: 'https://www.eastsidegames.com/',
      tier: 'gold',
      logoURL: 'https://www.eastsidegames.com/wp-content/themes/esgnew/img/logo-final.png',
      logoFilter: 'invert() grayscale(0.5)',
    },
    {
      name: 'Cisco',
      website: 'https://www.cisco.com/',
      tier: 'gold',
      logoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png',
    },
  ],
};
