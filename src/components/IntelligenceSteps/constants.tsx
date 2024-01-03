import { ExportDataIcon, SearchIcon, StatisticsIcon } from '@/assets/icons';

export const HighlightedSteps = [
  {
    icon: <SearchIcon className="w-full h-full" />,
    title: 'Search a selector',
    description:
      'Enter a phone or email to initiate. Our platform rapidly connects to numerous data sources.'
  },
  {
    icon: <StatisticsIcon className="w-full h-full" />,
    title: 'Receive real-time intelligence',
    description:
      'Access immediate insights, including profiles, photos, links, and more, for a complete digital picture.'
  },
  {
    icon: <ExportDataIcon className="w-full h-full" />,
    title: 'Analyze and export data',
    description: 'Examine data closely and export in your preferred format: JSON, CSV, or PDF.'
  }
];
