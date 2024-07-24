import { Hero } from '../../components';
import { useSelector } from 'react-redux';
import { venueData } from '../../features/venue/selector';

const MenuTemplate = () => {
  const { venue } = useSelector(venueData);

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
