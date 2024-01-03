import { HighlightedSteps } from './constants';

const IntelligenceSteps = () => {
  return (
    <div className="my-16 mt-32">
      <p className="text-center text-4xl font-bold">
        Effortless intelligence in{' '}
        <span className="bg-gradient-to-r from-[#7F00FF] to-[#FFFFFF] text-transparent bg-clip-text">
          three steps
        </span>
      </p>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {HighlightedSteps.map(({ title, description, icon }, index) => (
          <div key={index} className="flex flex-col gap-2 justify-center items-center text-center">
            <div className="my-3 w-24 h-24">{icon}</div>
            <span className="text-white font-medium">{title}</span>
            <span className="font-light text-sm">{description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceSteps;
