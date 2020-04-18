import { Team } from './data/types';

const teams: Team[] = [
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

export default {
  recruitment: {
    /**
     * recruitment season
     */
    season: '2020',
    /**
     * are applications open? this activates CTAs on the website for signup
     */
    applicationsOpen: true,
  },
  club: {
    teams: teams,
    memberCount: 50,
  },
};
