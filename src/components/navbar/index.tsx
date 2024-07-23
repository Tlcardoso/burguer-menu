import { RxHamburgerMenu } from 'react-icons/rx';
import { cn } from '../../lib/utils';
import { NavbarType } from './types';
import { NavItem } from './navItem';
import { navigationItems } from './items';
import { IoMdClose } from 'react-icons/io';

export const Navbar = ({ className, title, setNavbar, navbar }: NavbarType) => {

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setNavbar((prev) => !prev);
  };


  return (
    <header
      className={cn('w-full h-[64px] md:h-[52px] bg-navBackground flex justify-center items-center relative', className)}
    >
      <nav
        className='h-full hidden md:flex'
      >
        {navigationItems.map((item) => (
          <NavItem
            {...item}
          />
        ))}
      </nav>
      <p
        className='text-white font-medium text-lg md:hidden m-0'
      >
        {title}
      </p>
      <div
        className='absolute right-6 text-white cursor-pointer md:hidden'
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        onClick={handleClick}
      >
        {!navbar ? (
          <RxHamburgerMenu size={28} />
        ) : (
          <IoMdClose size={28} />
        )}
      </div>
    </header>
  );
};

