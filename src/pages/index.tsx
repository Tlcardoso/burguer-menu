import MenuTemplate from '../templates/menu';
import { withHome } from './layout/withHome';

const MenuPage = () => <MenuTemplate />;

const renderMenuPage = {
  children: MenuPage,
  title: 'MENU',
};

const ContactWithBanner = withHome(renderMenuPage);

export default ContactWithBanner;
