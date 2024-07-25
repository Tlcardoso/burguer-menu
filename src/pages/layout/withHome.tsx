import { useEffect, useState } from 'react';
import { Navbar } from '../../components';
import { MobileNavbar } from '../../components/navbar/mobileNav';
import { IwithHomeProp } from './types';
import { changeColorStyle } from '../../utils/variables';
import { useAppDispatch } from '../../store/store';
import { setVenueData } from '../../features/venue';
import { useOneVenueQuery } from '../../services/VenueServices';
import { useParams } from 'react-router-dom';
import { environment } from '../../config/enviroments';

const withHome = (props: IwithHomeProp) => {
  const PageWithHome = () => {
    const { id } = useParams();
    const [navbar, setNavbar] = useState(false);
    const { data } = useOneVenueQuery(id || '');
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

        const formattedLocaleConfig = {
          ccy: data.ccy,
          ccySymbol: data.ccySymbol,
          locale: data.locale,
          timezoneOffset: data.timezoneOffset,
        };

        const localeSettings = JSON.stringify(formattedLocaleConfig);
        sessionStorage.setItem(environment.localeSettings, localeSettings);

        changeColorStyle(formattedConfig);
      }
    }, [data]);

    return (
      <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
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
