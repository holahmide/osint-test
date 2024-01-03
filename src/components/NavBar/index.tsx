import { ArrowRightIcon, ChevromBottomIcon } from '../../assets/icons';
import { Logo } from '../../assets/images';
import Wrapper from '../Wrapper';
import { NavLinks } from './constants';

const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <nav className="w-full flex justify-between mt-8">
        <div className="flex gap-2 items-center z-30">
          <img src={Logo} alt="logo" className="w-6 h-6" />
          <span className="text-lg">OSINT Industries</span>
        </div>

        <ul className="hidden gap-6 z-30 md:flex">
          {NavLinks.map(({ path, name, hasSubLinks }, index) => (
            <li key={index}>
              <a href={path} className="flex gap-1 items-center text-white font-light">
                <span>{name}</span>
                {hasSubLinks && <ChevromBottomIcon />}
              </a>
            </li>
          ))}
        </ul>

        <a href="/get-started" className="flex gap-1 items-center text-white font-light">
          <span>Get Started</span>
          <ArrowRightIcon />
        </a>
      </nav>
      <hr className="max-w-6xl mx-auto filter brightness-[.05]" />
    </Wrapper>
  );
};

export default NavBar;
