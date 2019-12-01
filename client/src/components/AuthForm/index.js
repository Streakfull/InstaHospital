import React, { Fragment, useState } from 'react';
import { Button, Form, Radio, Menu, Message, Input } from 'semantic-ui-react';
import { post } from '../../services/axios';
import { useDispatch } from 'react-redux';
import { logIn } from '../../actions/authActions';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [tab, setTab] = useState('signup');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!role && tab === 'signup') {
      setError('Please select a role');
      return;
    }
    setLoading(true);
    setError(false);
    tab === 'signup'
      ? post('accounts/signup', { email, password, role })
          .then(() => post('accounts/login', { email, password }))
          .then(response => {
            dispatch(logIn(response));
            setLoading(false);
            localStorage.setItem('auth', JSON.stringify(response));
          })
          .catch(error => {
            setLoading(false);
            setError(error.message);
          })
      : post('accounts/login', { email, password })
          .then(response => {
            dispatch(logIn(response));
            setLoading(false);
            localStorage.setItem('auth', JSON.stringify(response));
          })
          .catch(error => {
            setLoading(false);
            setError(error.message);
          });
  };

  const changeTab = () => {
    setError(false);
    if (tab === 'signup') {
      setTab('login');
    } else setTab('signup');
  };
  return (
    <Form error={error}>
      <Menu pointing secondary>
        <Menu.Item
          name="Sign Up"
          active={tab === 'signup'}
          onClick={changeTab}
        />
        <Menu.Item name="Log In" active={tab === 'login'} onClick={changeTab} />
      </Menu>
      <Message error header={error} />
      <Form.Field required>
        <label>Email</label>
        <Input
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          type="email"
          icon="mail"
        />
      </Form.Field>
      <Form.Field required>
        <label>Password</label>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          icon="lock"
        />
      </Form.Field>
      {tab === 'signup' && (
        <Fragment>
          <Form.Field required>
            <b>Role</b>
          </Form.Field>
          <Form.Field>
            <Radio
              label="User"
              name="radioGroup"
              value="user"
              checked={role === 'user'}
              onChange={event => setRole('user')}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Hospital"
              name="radioGroup"
              value="hospital"
              checked={role === 'hospital'}
              onChange={event => setRole('hospital')}
            />
          </Form.Field>
        </Fragment>
      )}
      <Button type="submit" onClick={onSubmit} primary loading={loading}>
        Submit
      </Button>
    </Form>
  );
};

export default AuthForm;
