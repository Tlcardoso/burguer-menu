import { Item } from '../../services/VenueServices/types';

export type ItemModalTypes = {
  item?: Item | null
  setItem: React.Dispatch<React.SetStateAction<Item | null>>;
}
