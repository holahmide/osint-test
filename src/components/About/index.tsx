import { PlusIcon } from '@/assets/icons';
import { AboutPoints } from './constants';

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
        <div className="h-36 border-r border-[rgba(255,255,255,0.12)] relative">
          <div className="absolute bottom-0 right-0 -m-1.5">
            <PlusIcon />
          </div>
        </div>
        <div className="h-36 border-r border-[rgba(255,255,255,0.12)] relative hidden md:block">
          <div className="absolute bottom-0 right-0 -m-1.5">
            <PlusIcon />
          </div>
        </div>
        <div className="h-36 hidden sm:block"></div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 
                    [&>*:nth-child(1)]:border-r [&>*:nth-child(1)]:border-t 
                    sm:[&>*:nth-child(2)]:border-t 
                    md:[&>*:nth-child(-n+3)]:border-t md:[&>*:nth-child(-n+3)]:border-r [&>*:nth-child(3n)]:border-r-0"
      >
        {AboutPoints.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="px-5 py-8 flex flex-col gap-1 border-[rgba(255,255,255,0.12)]"
          >
            <span>{icon}</span>
            <span className="text-white font-medium">{title}</span>
            <span className="font-light text-sm">{description}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
