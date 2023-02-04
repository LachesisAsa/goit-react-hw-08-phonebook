import { Container, IconContainer, Title } from './Home.styled';
import { FaAddressBook } from 'react-icons/fa';
const Home = () => {
  return (
    <Container>
      <IconContainer>
        <FaAddressBook size={48} />
      </IconContainer>

      <Title>
        <span>Welcome! </span>
        You can add new contacts to your individual Phonebook
      </Title>
    </Container>
  );
};

export default Home;