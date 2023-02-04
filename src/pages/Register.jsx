import { Helmet } from 'react-helmet-async';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, ContentBlock, TitleForm } from './Pages.styled';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Container>
        <ContentBlock>
          <TitleForm>Register Form</TitleForm>
          <RegisterForm />
        </ContentBlock>
      </Container>
    </div>
  );
};

export default Register;