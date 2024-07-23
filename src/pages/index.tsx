import { withHome } from './layout/withHome';

const MenuPage = () => <div>oi</div>;

const renderMenuPage = {
  children: MenuPage,
};

const ContactWithBanner = withHome(renderMenuPage);

export default ContactWithBanner;
