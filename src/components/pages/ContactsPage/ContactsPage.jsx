import Section from 'components/shared/components/Section';
import Container from 'components/shared/components/Container';
import ContactsInfo from 'components/ContactsInfo';
import { Wrapper, InfoWrapper } from './ContactsPage.styles';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

const ContactsPage = () => {
  return (
    <Section>
      <Container>
        <Filter />
        <InfoWrapper>
          <Wrapper>
            <ContactForm />
            <ContactList />
          </Wrapper>
          <ContactsInfo />
        </InfoWrapper>
      </Container>
    </Section>
  );
};

ContactsPage.propTypes = {
  // bla: PropTypes.string,
};

ContactsPage.defaultProps = {
  // bla: 'test',
};

export default ContactsPage;
