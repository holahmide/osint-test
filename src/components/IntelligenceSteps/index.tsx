import { HighlightedSteps } from './constants';
import { m } from 'framer-motion';

const IntelligenceSteps = () => {
  return (
    <div className="my-16 mt-32">
      <m.p
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl font-bold"
      >
        Effortless intelligence in{' '}
        <span className="bg-gradient-to-r from-[#7F00FF] to-[#FFFFFF] text-transparent bg-clip-text">
          three steps
        </span>
      </m.p>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        {HighlightedSteps.map(({ title, description, icon }, index) => (
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            key={index}
            className="flex flex-col gap-2 justify-center items-center text-center"
          >
            <div className="my-3 w-24 h-24">{icon}</div>
            <span className="text-white font-medium">{title}</span>
            <span className="font-light text-sm">{description}</span>
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default IntelligenceSteps;
