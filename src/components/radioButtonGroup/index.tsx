import useWebSettings from '../../hook/useSession';
import { formatPrice } from '../../utils/internationalization';
import { RadioGroupItem } from '../ui/radio-group';
import { RadioButtonGroupTypes } from './styled';

export const RadioButtonGroup = ({ item, onClick, checked }: RadioButtonGroupTypes) => {
  const settings = useWebSettings();

  return (
    <div
      className='w-full flex justify-between items-center'
    >
      <div>
        <h1
          className='font-semibold text-base'
        >
          {item.name}
        </h1>
        <p
          className='font-normal text-base'
        >
          {formatPrice(item.price, settings?.ccy || 'BRL', settings?.locale || 'pt-BR')}
        </p>
      </div>
      <RadioGroupItem value={item.name} id={`${item.name}-${item.id}`} checked={checked} onClick={onClick} />
    </div>
  );
};
