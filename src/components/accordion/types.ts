import { Item } from '../../services/VenueServices/types';

export type AccordionType = {
  name: string,
  items: Item[],
  onClick: (item: Item) => void,
}
