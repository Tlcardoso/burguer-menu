import { Hero } from '../../components';
import { useSelector } from 'react-redux';
import { venueData } from '../../features/venue/selector';
import { useGetMenuQuery } from '../../services/VenueServices';
import { useAppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { setMenuData } from '../../features/menu';

const MenuTemplate = () => {
  const { venue } = useSelector(venueData);
  const { data } = useGetMenuQuery({}, { skip: venue });
  const dispatch = useAppDispatch();

  console.log(data);
  useEffect(() => {
    if (data) {
      dispatch(setMenuData({ data }));
    }
  }, [data]);

  return (
    <div className='w-full h-full'>
      <Hero
        src={venue?.data?.webSettings?.bannerImage || ''}
      />
      <div
        className='container-size md:px-52 md:pb-9'
      >
        <div
          className='w-full h-full bg-lightGray'
        >
          render
        </div>
      </div>
    </div>
  );
};

export default MenuTemplate;
