import { Hero } from '../../components';

const MenuTemplate = () => {
  return (
    <div className='w-full h-full'>
      <Hero
        src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
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
