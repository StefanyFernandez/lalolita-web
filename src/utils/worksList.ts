export enum TabsNames {
  All = 'All',
  Web = 'UI - UX',
  Branding = 'Branding',
  Lettering = 'Lettering',
  Other = 'Other Things',
}

export type WorkSizes = 'tall' | 'wide' | 'big';

interface Tabs {
  category: TabsNames;
}

export const tabs: Tabs[] = [
  {
    category: TabsNames.All,
  },
  {
    category: TabsNames.Web,
  },
  {
    category: TabsNames.Branding,
  },
  {
    category: TabsNames.Lettering,
  },
  {
    category: TabsNames.Other,
  },
];

export interface Works {
  name: string;
  link: string;
  image: string;
  category: TabsNames;
  size?: WorkSizes;
}

export const works: Works[] = [
  {
    name: 'Lalaland',
    link: 'lalaland',
    image: 'lalaland/01',
    category: TabsNames.Web,
    size: 'big',
  },
  {
    name: 'CP GO',
    link: 'cp-go',
    image: 'cp-go/01',
    category: TabsNames.Web,
    size: 'big',
  },
  {
    name: 'Dr. Q',
    link: 'dr-q',
    image: 'dr-q/cover',
    category: TabsNames.Web,
    size: 'tall',
  },
  /* {
    name: 'Cervantes',
    link: 'cervantes',
    image: 'photo-2',
    category: TabsNames.Web,
  }, */
  /* {
    name: 'Nowo',
    link: 'nowo',
    image: 'photo-2',
    category: TabsNames.Web,
    size: 'tall',
  }, */
  /* {
    name: 'Read Garden',
    link: 'read-garden',
    image: 'photo-2',
    category: TabsNames.Web,
    size: 'big',
  }, */
  {
    name: 'Luck',
    link: 'luck',
    image: 'luck/luck',
    category: TabsNames.Lettering,
    size: 'big',
  },
  {
    name: 'Chicky Nuggies',
    link: 'chicky-nuggies',
    image: 'chicky-nuggies/chicky-nuggies',
    category: TabsNames.Lettering,
  },
  {
    name: 'Hello World',
    link: 'hello-world',
    image: 'hello-world/hello-world',
    category: TabsNames.Lettering,
  },
  {
    name: 'Every saint...',
    link: 'saint',
    image: 'saint/saint',
    category: TabsNames.Lettering,
  },
  {
    name: 'Soul Shine',
    link: 'soul-shine',
    image: 'soul-shine/soul-shine',
    category: TabsNames.Lettering,
  },
  {
    name: 'Stay Weird',
    link: 'stay-weird',
    image: 'stay-weird/stay-weird',
    category: TabsNames.Lettering,
    size: 'big',
  },
  {
    name: 'Timing',
    link: 'timing',
    image: 'timing/timing',
    category: TabsNames.Lettering,
    size: 'big',
  },
  /* {
    name: 'Los Cuates',
    link: 'los-cuates',
    image: 'photo-1',
    category: TabsNames.Branding,
    size: 'big',
  }, */
  /* {
    name: 'Publistone',
    link: 'publistone',
    image: 'photo-2',
    category: TabsNames.Branding,
    size: 'wide',
  }, */
];
