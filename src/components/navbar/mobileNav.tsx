import { navigationItems } from './items';
import { NavItem } from './navItem';

export const MobileNavbar = () => {
  return (
    <div
      className='w-full mobile-navbar md:hidden absolute bg-navBackground'
    >
      <nav
        className='w-full h-full px-4 py-11 flex flex-col items-center gap-7'
      >
        {navigationItems.map((item) => (
          <NavItem
            {...item}
          />
        ))}
      </nav>
    </div>
  );
};
