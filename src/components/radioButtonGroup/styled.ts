import { ModifierItem } from '../../services/VenueServices/types';


export type RadioButtonGroupTypes = {
  item: ModifierItem;
  onClick: () => void;
  checked: boolean;
}
