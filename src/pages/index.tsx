import { withHome } from './layout/withHome';

const MenuPage = () => <div>oi</div>;

const renderMenuPage = {
  children: MenuPage,
  title: 'MENU',
};

const ContactWithBanner = withHome(renderMenuPage);

export default ContactWithBanner;
