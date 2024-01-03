import {
  AccurateIcon,
  AnonymousIcon,
  ClockIcon,
  DataIcon,
  EliminateIcon,
  WorldIcon
} from '@/assets/icons';

const IconClassName = 'w-8 h-8';

export const AboutPoints = [
  {
    icon: <ClockIcon className={IconClassName} />,
    title: 'Real-Time Intelligence',
    description: 'Get up-to-the-minute information instantly.'
  },
  {
    icon: <AnonymousIcon className={IconClassName} />,
    title: 'Stealthy Searches',
    description: 'Stay discreet while gathering data.'
  },
  {
    icon: <WorldIcon className={IconClassName} />,
    title: '200+ Data Sources',
    description: 'Access a vast network of information.'
  },
  {
    icon: <EliminateIcon className={IconClassName} />,
    title: 'Zero False Positives',
    description: 'Eliminate irrelevant results for precision.'
  },
  {
    icon: <AccurateIcon className={IconClassName} />,
    title: '100% Accuracy',
    description: "Trust in data that's always spot-on."
  },
  {
    icon: <DataIcon className={IconClassName} />,
    title: 'No Data Storage',
    description: 'Your searches, your privacy, always protected.'
  }
];
