import { Link, useLocation } from 'react-router-dom';
import { NavigationItemType } from './types';

export const NavItem = ({ name, path }: NavigationItemType) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={`flex w-full md:w-[232px] justify-center items-center bg-primary text-white text-xl cursor-pointer hover:opacity-50 md:hover:border-b-2 ${pathname.includes(path) && 'md:border-b-2'}`}
    >
      {name}
    </Link>
  );
};
