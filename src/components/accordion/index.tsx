import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import useWebSettings from '../../hook/useSession';
import { formatPrice } from '../../utils/internationalization';
import { AccordionType } from './types';

export const AccordionContainer = ({ name, items, onClick }: AccordionType) => {
  const settings = useWebSettings();
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
              <h1
                className='font-semibold text-black text-base outline-none'
              >
                {item.name}
              </h1>
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
