import { unwrapResult } from '@reduxjs/toolkit';
import { LoaderUser } from 'components/LoaderUser/LoaderUser';
import { Form } from 'components/LoginForm/LoginForm.styled';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button, Input, Label } from './RegisterForm.styled';
import { GiArchiveRegister } from 'react-icons/gi';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .then(response => {
        toast.success(`User ${response.user.name} was register successfully`);
      })
      .catch(() => toast.error(`Something wrong, try again`));
    form.reset();
  };

  return isLoading ? (
    <LoaderUser />
  ) : (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input type="text" name="name" placeholder="Enter username" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" placeholder="email@mail.com" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Enter password" />
      </Label>
      <Button type="submit">
        Register <GiArchiveRegister size={20} />
      </Button>
    </Form>
  );
};