export enum TabsNames {
  All = 'All',
  Web = 'UI - UX',
  Branding = 'Branding',
  Lettering = 'Lettering',
  Other = 'Other Things',
}

interface Works {
  name: string;
  link: string;
  category: TabsNames;
}

export const works: Works[] = [
  {
    name: 'Nowo',
    link: 'nowo',
    category: TabsNames.Web,
  },
  {
    name: 'Dr. Q',
    link: 'dr-q',
    category: TabsNames.Web,
  },
  {
    name: 'Lettering 1',
    link: 'lettering-1',
    category: TabsNames.Lettering,
  },
];
