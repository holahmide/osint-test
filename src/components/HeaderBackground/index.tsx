import { HeroBackground, HeroWave } from '@/assets/images';

const HeaderBackground = () => {
  return (
    <div className="h-[100vh] absolute">
      <HeroWave className="absolute h-[100vh] -mt-2 z-10 max-w-3xl" />

      <HeroBackground className="absolute h-[65vh] bottom-0 scale-[2.7] pt-20" />
    </div>
  );
};

export default HeaderBackground;
