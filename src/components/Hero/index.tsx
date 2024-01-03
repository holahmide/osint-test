import { ArrowRightIcon, FullStarIcon, HalfStarIcon } from '@/assets/icons';
import Wrapper from '../Wrapper';
import { RatingsIllustration, WorldMapSVG } from '@/assets/images';

const Hero = () => {
  return (
    <div className="relative h-[80vh] mb-40">
      <div className="relative">
        <div className="absolute right-0 -mr-6 top-24 hidden md:inline">
          <WorldMapSVG className="w-full max-h-[500px]" />
        </div>
        <Wrapper>
          <div className="h-[85vh] flex items-center relative">
            <div className="flex flex-col justify-center gap-3 md:max-w-[60%] h-full z-30">
              <p className="text-4xl md:text-6xl font-bold !text-white leading-tighter">
                <span className="bg-gradient-to-r from-[#7F00FF] to-[#FFFFFF] text-transparent bg-clip-text">
                  Supercharge
                </span>
                &nbsp; your searches
                <br /> with OSINT Industries
              </p>
              <p>
                The world’s best OSINT platform to give you detailed information from over 200+
                websites.
              </p>

              <div className="flex gap-8 my-4">
                <button className="bg-white text-black rounded-[14px] border-white border-4 border-opacity-10 bg-clip-padding">
                  Get Started
                </button>

                <a href="/learn-more" className="flex items-center gap-1 text-white">
                  <span>Learn more</span>
                  <ArrowRightIcon className="mt-1" />
                </a>
              </div>

              <div className="flex gap-3 items-center">
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
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Hero;
