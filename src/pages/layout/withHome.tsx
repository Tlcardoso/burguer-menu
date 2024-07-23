import { useState } from 'react';
import { Navbar } from '../../components';
import { MobileNavbar } from '../../components/navbar/mobileNav';
import { IwithHomeProp } from './types';

const withHome = (props: IwithHomeProp) => {
  const PageWithHome = () => {
    const [navbar, setNavbar] = useState(false);

    return (
      <div className='w-screen h-screen overflow-hidden'>
        <Navbar title={props.title} setNavbar={setNavbar} navbar={navbar} />
        {navbar && (
          <MobileNavbar />
        )}
        <props.children />
      </div>
    );
  };
  return PageWithHome;
};

export { withHome };
