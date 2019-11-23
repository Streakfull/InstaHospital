import React, { Fragment, useState } from 'react';
import { Button, Form, Radio, Menu, Message } from 'semantic-ui-react';
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
    setLoading(true);
    setError(false);
    tab === 'signup'
      ? post('accounts/signup', { email, password, role })
          .then(response => post('accounts/login', { email, password }))
          .then(response => {
            dispatch(logIn(response.data.data));
            setLoading(false);
            localStorage.setItem('auth', JSON.stringify(response.data.data));
          })
          .catch(error => {
            setLoading(false);
            setError(true);
          })
      : post('accounts/login', { email, password })
          .then(response => {
            dispatch(logIn(response.data.data));
            setLoading(false);
            localStorage.setItem('auth', JSON.stringify(response.data.data));
          })
          .catch(error => {
            setLoading(false);
            setError(true);
          });
  };

  return (
    <Form error={error}>
      <Menu pointing secondary>
        <Menu.Item
          name="Sign Up"
          active={tab === 'signup'}
          onClick={() => setTab('signup')}
        />
        <Menu.Item
          name="Log In"
          active={tab === 'login'}
          onClick={() => setTab('login')}
        />
      </Menu>
      <Message error header="Something went wrong" />
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </Form.Field>
      {tab === 'signup' && (
        <Fragment>
          <Form.Field>
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
