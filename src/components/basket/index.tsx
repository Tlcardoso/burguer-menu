import { FiMinus, FiPlus } from 'react-icons/fi';
import { Button } from '../button';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { basketData } from '../../features/basket/selector';
import { updateItemQuantity } from '../../features/basket';
import { BasketItemType } from '../../features/basket/reducer';
import { calculateTotalSale } from '../../utils/numbers';
import useWebSettings from '../../hook/useSession';
import { formatPrice } from '../../utils/internationalization';
import { IoMdClose } from 'react-icons/io';
import { BasketTypes } from './types';

export const Basket = ({ setShowBasket }: BasketTypes) => {
  const { basket } = useSelector(basketData);
  const dispatch = useAppDispatch();
  const settings = useWebSettings();

  return (
    <div>
      <div
        className="w-full h-full flex justify-center md:justify-start p-5 md:h-16"
      >
        <div
          className='absolute right-4 top-6 md:hidden'
        >
          <Button
            variant="smallWhite"
            onClick={() => setShowBasket(false)}
          >
            <IoMdClose />
          </Button>
        </div>
        <h1
          className="text-2xl font-medium"
        >
          Carrinho
        </h1>
      </div>
      {basket?.data?.map((group: BasketItemType) => (
        <div
          className="flex flex-col p-5 gap-2"
        >
          <div
            className="flex flex-col gap-2"
          >
            <div
              className="flex justify-between"
            >
              <p
                className="text-base font-medium"
              >
                {group?.name}
              </p>
              <p
                className="text-base font-medium"
              >
                {formatPrice(group?.price, settings?.ccy || 'BRL', settings?.locale || 'pt-BR')}
              </p>
            </div>
            <div>
              <p
                className="text-base font-normal text-[#5F5F5F]"
              >
                {group?.items?.name}
              </p>
            </div>
            <div
              className='pl-4 flex flex-col items-start'
            >
              <div
                className='flex gap-2 mb-2.5'
              >
                <Button
                  variant={'smallBrown'}
                  onClick={() => dispatch(updateItemQuantity({ groupId: group.uuid, increment: false }))}
                >
                  <FiMinus />
                </Button>
                <p>
                  {group.qty}
                </p>
                <Button
                  variant={'smallBrown'}
                  onClick={() => dispatch(updateItemQuantity({ groupId: group.uuid, increment: true }))}
                >
                  <FiPlus />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        className='p-4'
      >
        <div>
          <div
            className='flex justify-between h-[30px]'
          >
            <p
              className="text-lg font-normal text-black"
            >
              Sub total
            </p>
            <p
              className="text-lg font-normal text-black"
            >
              {formatPrice(calculateTotalSale(basket.data), settings?.ccy || 'BRL', settings?.locale || 'pt-BR')}
            </p>
          </div>
          <div
            className='flex justify-between h-[60px] items-center border-t-2 border-gray'
          >
            <p
              className="text-2xl font-normal text-black"
            >
              Total:
            </p>
            <p
              className="text-2xl font-semibold text-black"
            >
              {formatPrice(calculateTotalSale(basket.data), settings?.ccy || 'BRL', settings?.locale || 'pt-BR')}
            </p>
          </div>
        </div>
        <Button
          variant={'default'}
        >
          Checkout now
        </Button>
      </div>
    </div>
  );
};
