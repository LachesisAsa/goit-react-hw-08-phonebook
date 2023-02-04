import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';
import { Container, ContentBlock, TitleForm } from './Pages.styled';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container>
        <ContentBlock>
          <TitleForm>Login Form</TitleForm>
          <LoginForm />
        </ContentBlock>
      </Container>
    </div>
  );
};

export default Login;