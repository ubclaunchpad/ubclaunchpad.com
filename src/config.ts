import { Team } from './data/types';

const teams: Team[] = [
  {
    name: 'Team1',
    project: {
      name: 'Sync',
      description: 'Watch YouTube videos interactively in sync with friends',
      images: {
        bannerURI: 'https://github.com/ubclaunchpad/new/blob/master/src/assets/sync.png',
      },
      links: {
        repository: 'https://github.com/ubclaunchpad/sync',
        website: 'https://thesyncapp.herokuapp.com/',
        writeup: 'https://github.com/ubclaunchpad/sync/blob/showcase/README.md',
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
