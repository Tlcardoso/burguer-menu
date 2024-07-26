import { useSelector } from 'react-redux';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import useWebSettings from '../../hook/useSession';
import { formatPrice } from '../../utils/internationalization';
import { calculateTotalQtyByName } from '../../utils/numbers';
import { AccordionType } from './types';
import { basketData } from '../../features/basket/selector';

export const AccordionContainer = ({ name, items, onClick }: AccordionType) => {
  const settings = useWebSettings();
  const { basket } = useSelector(basketData);

  return (
    <Accordion type="single" collapsible className='w-full'>
      <AccordionItem value="item-1">
        <AccordionTrigger
          className='font-semibold text-black text-2xl outline-none'
        >
          {name}
        </AccordionTrigger>
        {items?.map((item) => (
          <AccordionContent
            key={item.id}
            className='flex gap-4 justify-between cursor-pointer'
            onClick={() => onClick(item)}
          >
            <div
              className='flex flex-col items-start justify-start gap-1 w-2/3'
            >
              <div
                className='flex gap-2'
              >
                {calculateTotalQtyByName(basket?.data, item.name) > 0 && (
                  <div
                    className='w-6 h-6 bg-primary flex justify-center items-center text-white rounded-md text-sm font-medium'
                  >
                    {calculateTotalQtyByName(basket?.data, item.name)}
                  </div>
                )}
                <h1
                  className='font-semibold text-black text-base outline-none'
                >
                  {item.name}
                </h1>
              </div>
              <p
                className=' w-full font-light text-black text-base outline-none line-clamp-2 text-ellipsis '
              >
                {item.description}
              </p>
              <h2
                className='font-semibold text-black text-base outline-none'
              >
                {formatPrice(item.price, settings?.ccy || 'BRL', settings?.locale || 'pt-BR')}
              </h2>
            </div>
            {(item.images && !!item.images.length) && (
              <div
                className='w-36'
              >
                <img
                  className='w-36 rounded-lg'
                  src={item?.images[0]?.image}
                />
              </div>
            )}
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
