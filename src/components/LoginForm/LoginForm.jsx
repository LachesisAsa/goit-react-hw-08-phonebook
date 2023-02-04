import { unwrapResult } from '@reduxjs/toolkit';
import { LoaderUser } from 'components/LoaderUser/LoaderUser';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button, Form, Input, Label } from './LoginForm.styled';
import { FaUserPlus } from 'react-icons/fa';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .then(unwrapResult)
      .then(response => {
        toast.success(`User ${response.user.name} was login successfully`);
      })
      .catch(() => toast.error(`Something wrong, try again`));
    form.reset();
  };

  return isLoading ? (
    <LoaderUser />
  ) : (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">
        Log In <FaUserPlus />
      </Button>
    </Form>
  );
};