import { ContactsInfoWrapper } from './ContactsInfo.styles';
import { Outlet } from 'react-router-dom';
const ContactsInfo = () => {
  return (
    <ContactsInfoWrapper>
      <Outlet />
    </ContactsInfoWrapper>
  );
};

export default ContactsInfo;
