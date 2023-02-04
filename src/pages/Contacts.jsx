import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import {
  Container,
  TitleForm,
  TitleContacts,
  ContentBlock,
  ScrollBar,
  Message,
} from './Pages.styled';

import { selectFilterList } from '../redux/selectors';
import Filter from 'components/Filter';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from '../redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';
import { RiContactsFill } from 'react-icons/ri';
import { Helmet } from 'react-helmet-async';
import { useAuth } from 'hooks/useAuth';
import { LoaderUser } from 'components/LoaderUser/LoaderUser';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const { isLoading } = useAuth();
  const contacts = useSelector(selectContacts);
  const filterList = useSelector(selectFilterList);
  const isLoadingContacts = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      {isLoading ? (
        <LoaderUser />
      ) : (
        <>
          {' '}
          <ContentBlock>
            <TitleForm>Phonebook</TitleForm>
            <ContactForm />
          </ContentBlock>
          <ContentBlock>
            <TitleContacts>Contacts</TitleContacts>

            {error && <Notification message="Contacts no found" />}
            {!isLoadingContacts && !error && contacts.length === 0 && (
              <Message>
                You have no contacts, add your first contact <RiContactsFill />
              </Message>
            )}
            {contacts.length > 0 && <Filter />}
            {isLoadingContacts && !error && <Loader />}
            {filterList.length > 0 && (
              <ScrollBar>
                <ContactList />
              </ScrollBar>
            )}
          </ContentBlock>
        </>
      )}
    </Container>
  );
};

export default Contacts;