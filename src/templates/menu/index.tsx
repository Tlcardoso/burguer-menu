import { AccordionContainer, Hero, Input, ItemCard, ItemModal, SkeletonCard } from '../../components';
import { useSelector } from 'react-redux';
import { venueData } from '../../features/venue/selector';
import { useGetMenuQuery } from '../../services/VenueServices';
import { useState } from 'react';
import { Item } from '../../services/VenueServices/types';

const MenuTemplate = () => {
  const { venue } = useSelector(venueData);
  const { data } = useGetMenuQuery({});
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [itemToShow, setItemToShow] = useState<Item | null>(null);
  const filteredItemList = selectedItem.length ? data?.sections.filter((item) => item.name === selectedItem) : data?.sections;

  const handleSelectItem = (name: string) => {
    if (name === selectedItem) {
      setSelectedItem('');
      return;
    }

    setSelectedItem(name);
  };

  return (
    <div className='w-full'>
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
            className='container-size md:px-10 lg:px-20 xl:px-52 md:pb-9 flex flex-col'
          >
            <div
              className='w-full bg-lightGray md:bg-transparent p-4 md:px-0'
            >
              <Input
                placeholder="Search menu items"
              />
            </div>
            <div
              className='w-full bg-lightGray md:px-10 md:py-8 flex md:gap-6'
            >
              <div
                className='w-full md:w-3/4 bg-white md:shadow-xl'
              >
                <div
                  className='flex gap-5 px-4 py-5'
                >
                  {data?.sections.map((item) => (
                    <ItemCard
                      key={item.id}
                      title={item.name}
                      src={item.images[0].image}
                      active={selectedItem === item.name}
                      onClick={() => handleSelectItem(item.name)}
                    />
                  ))}
                </div>
                <div
                  className='flex items-start flex-col gap-5 px-4 py-5 pb-20 w-full'
                >
                  {filteredItemList?.map((item) => (
                    <AccordionContainer
                      key={item.name}
                      name={item.name}
                      items={item.items}
                      onClick={setItemToShow}
                    />
                  ))}
                </div>
              </div>
              <div
                className='md:w-1/3 h-full md:bg-white md:shadow-xl'
              >
                basket
              </div>
            </div>
          </div>
          <ItemModal
            item={itemToShow}
            setItem={setItemToShow}
          />
        </>
      )}
    </div>
  );
};

export default MenuTemplate;
