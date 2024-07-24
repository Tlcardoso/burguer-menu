import { Hero, Input, SkeletonCard } from '../../components';
import { useSelector } from 'react-redux';
import { venueData } from '../../features/venue/selector';
import { useGetMenuQuery } from '../../services/VenueServices';
import { useAppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { setMenuData } from '../../features/menu';

const MenuTemplate = () => {
  const { venue } = useSelector(venueData);
  const { data } = useGetMenuQuery({});
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setMenuData({ data }));
    }
  }, [data]);

  return (
    <div className='w-full h-full'>
      {!data ? (
        <div className='w-full p-24'>
          <SkeletonCard />
        </div>
      ) : (
        <>
          <Hero
            src={venue?.data?.webSettings?.bannerImage || ''}
          />
          <div
            className='container-size md:px-52 md:pb-9'
          >
            <div
              className='w-full bg-lightGray md:bg-transparent p-4 md:px-0'
            >
              <Input
                placeholder="Search menu items"
              />
            </div>
            <div
              className='w-full h-full bg-lightGray'
            >
              render
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuTemplate;
