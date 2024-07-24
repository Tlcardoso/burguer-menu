import { useEffect, useState } from 'react';
import { Navbar } from '../../components';
import { MobileNavbar } from '../../components/navbar/mobileNav';
import { IwithHomeProp } from './types';
import { changeColorStyle } from '../../utils/variables';
import { useAppDispatch } from '../../store/store';
import { setVenueData } from '../../features/venue';
import { useOneVenueQuery } from '../../services/VenueServices';

const withHome = (props: IwithHomeProp) => {
  const PageWithHome = () => {
    const [navbar, setNavbar] = useState(false);
    const { data } = useOneVenueQuery('9');
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (data) {
        dispatch(setVenueData({ data }));
        const formattedConfig = [
          {
            variable: '--background-color',
            color: data.webSettings.backgroundColour,
          },
          {
            variable: '--primary-color',
            color: data.webSettings.primaryColour,
          },
          {
            variable: '--nav-background-color',
            color: data.webSettings.navBackgroundColour,
          },
          {
            variable: '--color-hover',
            color: data.webSettings.primaryColourHover,
          },
        ];

        changeColorStyle(formattedConfig);
      }
    }, [data]);

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
