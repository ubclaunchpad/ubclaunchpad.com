import { Team, ClubPosition, ClubSponsor } from './data/types';

/**
 * Recruitment configuration
 */

const positions: ClubPosition[] = [
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
];

const recruitment = {
  /**
   * recruitment season
   */
  season: '2020',
  /**
   * are applications open? this activates CTAs on the website for signup
   */
  applicationsOpen: true,
  /**
   * positions that are open for application
   */
  positions,
};

/**
 * Club configuration
 */

const currentTeams: Team[] = [
  {
    name: 'Team1',
    project: {
      name: 'Placeholder1',
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
    name: 'Team2',
    project: {
      name: 'Placeholder2',
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
];

const featuredTeams: Team[] = [
  {
    name: 'Brussel Sprouts',
    project: {
      name: 'Rocket 2',
      description: '🚀 Slack bot, team management, and onboarding system for UBC Launch Pad',
      images: {
        bannerURI: undefined,
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/rocket2',
        website: 'https://rocket2.readthedocs.io',
      },
    },
  },
  {
    name: 'Inertia',
    project: {
      name: 'Inertia',
      description: ':airplane: Effortless, self-hosted continuous deployment',
      images: {
        bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/inertia/master/.static/inertia-init.png',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/inertia',
        website: 'https://inertia.ubclaunchpad.com',
        writeup: 'https://medium.com/ubc-launch-pad-software-engineering-blog/building-continuous-deployment-87a2bd8eedbe',
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
        writeup:
          'https://medium.com/ubc-launch-pad-software-engineering-blog/speaker-diarisation-using-transfer-learning-47ca1a1226f4',
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
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/eat',
        website: 'https://apps.apple.com/ca/app/eat-now-find-where-to-eat/id1366648100',
      },
    },
  },
  {
    name: 'Cumulus',
    project: {
      name: 'Cumulus',
      description: '💸 Cryptocurrency that doesn\'t waste your time',
      images: {
        bannerURI: 'https://raw.githubusercontent.com/ubclaunchpad/cumulus/dev/.static/create-transaction.png',
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
];

const club = {
  /**
   * Current teams
   */
  currentTeams,

  /**
   * Past teams to feature
   */
  featuredTeams,

  /**
   * Current members
   */
  memberCount: 50,
};

/**
 * Sponsors configuration
 */

const sponsors: ClubSponsor[] = [
  {
    name: 'Logo 1',
    tier: undefined,
    logoURL: '',
  },
  {
    name: 'Logo 2',
    tier: undefined,
    logoURL: '',
  },
  {
    name: 'Logo 3',
    tier: undefined,
    logoURL: '',
  },
  {
    name: 'Logo 4',
    tier: undefined,
    logoURL: '',
  },
];

const sponsorship = {
  sponsors,
  package: 'TODO',
};

/**
 * Export all configuration options
 */
export default {
  recruitment,
  club,
  sponsorship,
};
