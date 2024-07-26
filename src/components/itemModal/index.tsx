/* eslint-disable react-hooks/rules-of-hooks */
import { IoMdClose } from 'react-icons/io';
import { Button } from '../button';
import { ItemModalTypes } from './types';
import { RadioButtonGroup } from '../radioButtonGroup';
import { RadioGroup } from '../ui/radio-group';
import { useState } from 'react';
import useWebSettings from '../../hook/useSession';
import { formatPrice } from '../../utils/internationalization';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useAppDispatch } from '../../store/store';
import { setBasketData } from '../../features/basket';
import { ModifierItem } from '../../services/VenueServices/types';
import { BasketItemType } from '../../features/basket/reducer';

export const ItemModal = ({ item, setItem }: ItemModalTypes) => {
  if (!item) return null;
  const [selectedValue, setSelectedValue] = useState<ModifierItem | null>(null);
  const [itemCounter, setItemCounter] = useState<number>(1);
  const settings = useWebSettings();
  const dispatch = useAppDispatch();

  const handleChange = (value: ModifierItem) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    const formattedItemToBasket: BasketItemType = {
      name: item.name,
      id: item.id,
      price: selectedValue?.price || item.price,
      qty: itemCounter,
      items: selectedValue,
    };
    dispatch(setBasketData(formattedItemToBasket));
    setItem(null);
  };

  return (
    <div
      className={`absolute w-screen h-screen flex justify-center items-center top-0 ${item ? 'block' : 'hidden'}`}
    >
      <div className="absolute w-full h-full bg-black opacity-50" />
      <div
        className="w-[363px] md:w-[393px] bg-white relative z-40"
      >
        <div
          className='absolute right-4 top-6'
        >
          <Button
            variant="smallWhite"
            onClick={() => setItem(null)}
          >
            <IoMdClose />
          </Button>
        </div>
        <div
          className='w-full min-h-12'
        >
          {(item.images && !!item.images.length) && (
            <img
              className='w-full'
              src={item?.images[0]?.image}
            />
          )}
        </div>
        <div
          className='max-h-[400px] overflow-auto'
        >
          <div
            className='p-4'
          >
            <h1
              className='font-bold text-2xl '
            >
              {item?.name}
            </h1>
            <p
              className='font-light text-base color-[#464646]'
            >
              {item?.description}
            </p>
          </div>
          {item?.modifiers && item?.modifiers.map((option) => (
            <div
              className='p-4'
            >
              <div
                className='mb-4'
              >
                <h1
                  className='font-bold text-base'
                >
                  {option.name}
                </h1>
                <p
                  className='font-normal text-base'
                >
                  Select {option.maxChoices} option
                </p>
              </div>
              {option.items.map((item) => {
                if (item.visible) {
                  return (
                    <RadioGroup
                      className='flex justify-between'
                    >
                      <RadioButtonGroup
                        item={item}
                        checked={item.price === selectedValue?.price}
                        onClick={() => handleChange(item)}
                      />
                    </RadioGroup>
                  );
                }
              })}
            </div>
          ))}
          <div
            className='p-4 flex flex-col items-center'
          >
            <div
              className='flex gap-4 mb-2.5'
            >
              <Button
                variant={itemCounter === 1 ? 'smallWhite' : 'smallBrown'}
                onClick={() => setItemCounter((prev) => prev - 1)}
                disabled={itemCounter === 1}
              >
                <FiMinus />
              </Button>
              <p>
                {itemCounter}
              </p>
              <Button
                variant={'smallBrown'}
                onClick={() => setItemCounter((prev) => prev + 1)}
              >
                <FiPlus />
              </Button>
            </div>
            <Button
              variant={'default'}
              onClick={() => handleSubmit()}
            >
              Add to Order • {formatPrice((selectedValue?.price || item.price) * itemCounter, settings?.ccy || 'BRL', settings?.locale || 'pt-BR')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
