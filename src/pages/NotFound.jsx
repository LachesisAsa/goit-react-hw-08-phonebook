import { Container } from './Home.styled';

const NotFound = () => {
  return (
    <Container>
      <main style={{ textAlign: 'center' }}>
        <b style={{ fontSize: 64 }}>404</b>
        <p>Sorry, we couldn't find that page</p>
      </main>
    </Container>
  );
};

export default NotFound;