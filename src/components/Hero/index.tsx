import { ArrowRightIcon, FullStarIcon, HalfStarIcon } from '@/assets/icons';
import Wrapper from '../Wrapper';
import { RatingsIllustration, WorldMapSVG } from '@/assets/images';
import { m } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-[80vh] mb-40 mx-auto max-w-10xl">
      <div className="relative">
        <m.div
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute right-0 -mr-0 top-[15%] 2xl:top-[20%] hidden md:inline"
        >
          <WorldMapSVG className="w-full max-h-[550px]" />
        </m.div>
        <Wrapper>
          <div className="h-[85vh] flex items-center relative">
            <div className="flex flex-col justify-center gap-3 md:max-w-[60%] h-full z-30">
              <m.p
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold !text-white leading-tighter"
              >
                <span className="bg-gradient-to-r from-[#7F00FF] to-[#FFFFFF] text-transparent bg-clip-text">
                  Supercharge
                </span>
                &nbsp; your searches
                <br /> with OSINT Industries
              </m.p>
              <m.p
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                The world’s best OSINT platform to give you detailed information from over 200+
                websites.
              </m.p>

              <m.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex gap-8 my-4"
              >
                <button className="bg-white text-black rounded-xl border-white border-4 border-opacity-10 bg-clip-padding">
                  Get Started
                </button>

                <a href="/learn-more" className="flex items-center gap-1 text-white">
                  <span>Learn more</span>
                  <ArrowRightIcon className="mt-1" />
                </a>
              </m.div>

              <m.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex gap-3 items-center"
              >
                <div className="flex gap-1">
                  {[...Array(4)].map((_, index) => (
                    <FullStarIcon key={index} />
                  ))}
                  <HalfStarIcon />
                </div>
                <div>
                  <RatingsIllustration />
                </div>
                <div>5 star rating</div>
              </m.div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;
