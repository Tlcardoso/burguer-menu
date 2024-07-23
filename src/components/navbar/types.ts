import { Dispatch, SetStateAction } from 'react';

export type NavbarType = {
  className?: string,
  title: string,
  setNavbar: Dispatch<SetStateAction<boolean>>,
  navbar: boolean,
}

export type NavigationItemType = {
  name: string,
  path: string,
}
