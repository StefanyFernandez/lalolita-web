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

interface Works {
  name: string;
  link: string;
  image: string;
  category: TabsNames;
  size?: WorkSizes;
}

export const works: Works[] = [
  {
    name: 'Nowo',
    link: 'nowo',
    image: 'photo-1',
    category: TabsNames.Web,
  },
  {
    name: 'Dr. Q',
    link: 'dr-q',
    image: 'photo-2',
    category: TabsNames.Web,
    size: 'tall',
  },
  {
    name: 'Lettering 1',
    link: 'lettering-1',
    image: 'photo-3',
    category: TabsNames.Lettering,
    size: 'wide',
  },
  {
    name: 'Lettering 2',
    link: 'lettering-2',
    image: 'photo-4',
    category: TabsNames.Lettering,
    size: 'wide',
  },
  {
    name: 'App 3',
    link: 'app-3',
    image: 'photo-1',
    category: TabsNames.Lettering,
  },
  {
    name: 'Web 1',
    link: 'web-1',
    image: 'photo-2',
    category: TabsNames.Web,
    size: 'big',
  },
];
