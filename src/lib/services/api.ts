import { Chart } from '@/lib/types';

const mockCharts: Chart[] = [
  {
    id: '1',
    author: { id: 'a1', displayName: 'America First News', handle: 'AmericaFirstOnGettr', verified: true, reputation: 5000, country: 'US', followers: 10000, following: 100, bio: '' },
    content: 'BREAKING: SWAT team raids home...',
    sourceHandle: '@AmericaFirstOnGettr',
    headline: 'Neighbor Says One Dead and Three Detained After SWAT Team Raids Home',
    linkUrl: 'https://www.thegatewaypundit.com/...',
    linkTitle: 'Neighbor Says One Dead...',
    linkDescription: 'A dramatic Friday night SWAT raid...',
    linkImage: 'https://via.placeholder.com/300x150',
    gameType: '',
    difficulty: '',
    stakeLevel: 0,
    gameId: '',
    reactions: { likes: 5, comments: 3, reposts: 1, shoutouts: 0 },
    comments: [],
    createdAt: new Date().toISOString(),
  },
  // More mock charts...
];

export const api = {
  getCharts: async (page: number): Promise<Chart[]> => {
    // Simulate pagination
    return mockCharts.slice((page-1)*5, page*5);
  },
  getGettrNewsFeed: async (): Promise<Chart[]> => {
    return [
      {
        id: 'news-1',
        author: { id: 'newsmax', displayName: 'Newsmax', handle: 'newsmax', verified: true, reputation: 5000, country: 'US', followers: 0, following: 0, bio: '' },
        sourceHandle: '@newsmax',
        headline: 'RUBIO REASSURES ALLIES: Secretary of State Marco Rubio offers reassuring message',
        linkUrl: 'https://bit.ly/4aRekpa',
        linkTitle: "Rubio's Speech to European Allies Takes Softer Tone but Sticks to Trump's Firm Stance",
        linkDescription: 'Secretary of State Marco Rubio offered a reassuring message to America’s allies on Saturday...',
        linkImage: 'https://via.placeholder.com/300x150',
        content: '',
        gameType: '',
        difficulty: '',
        stakeLevel: 0,
        gameId: '',
        reactions: { likes: 45, comments: 12, reposts: 8, shoutouts: 0 },
        comments: [],
        createdAt: new Date().toISOString(),
      },
      {
        id: 'news-2',
        author: { id: 'stevebannon', displayName: 'Steve Bannon', handle: 'SteveBannon', verified: true, reputation: 8500, country: 'US', followers: 0, following: 0, bio: '' },
        sourceHandle: '@SteveBannon',
        headline: 'Democrats Force Shutdown of DHS, Then Leave Town',
        linkUrl: 'https://www.theguardian.com/...',
        linkTitle: 'US homeland security department partially shut down...',
        linkDescription: 'Democrats Force Shutdown of DHS, Then Leave Town to go to Munich Arms Dealer’s Confab',
        linkImage: 'https://via.placeholder.com/300x150',
        content: '',
        gameType: '',
        difficulty: '',
        stakeLevel: 0,
        gameId: '',
        reactions: { likes: 120, comments: 45, reposts: 33, shoutouts: 0 },
        comments: [],
        createdAt: new Date().toISOString(),
      },
    ];
  },
  post: async (url: string, data: any) => {
    // Mock POST
    return { success: true };
  },
  get: async (url: string) => {
    // Mock GET
    return {};
  },
};