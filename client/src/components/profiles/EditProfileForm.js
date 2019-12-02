import React, { useState, useEffect } from 'react';
import * as axios from '../../services/axios.js';
import {
  Form,
  Grid,
  Header,
  Input,
  Button,
  Divider,
  Dropdown,
  Segment,
  Message,
  Container,
  Dimmer,
  Loader,
  Icon
} from 'semantic-ui-react';
import './signup.css';
import { useSelector, useDispatch } from 'react-redux';

const EditProfileForm = props => {
  const initialState = { fields: new Map() };
  const [state, setState] = useState(initialState);
  const auth = useSelector(state => state.auth);

  console.log(auth, 'AUTH');
  const handleAllChanges = (key, e) => {
    //setState({ ...state, [prop]: e.target.value });
    fields.set(key, e.target.value);
    setState({ ...state });
  };

  useEffect(() => {
    if (!auth) return;

    setState({ loading: true });
    axios.get(`${auth.role}s/${auth.accountID}`).then(response => {
      setFieldAttributes(response);
    });
  }, [auth]);

  const setFieldAttributes = data => {
    const { address, description, isComplete, name, phoneNumber } = data;
    setState({
      ...state,
      fields: new Map([
        ['name', name],
        ['address', address],
        ['phoneNumber', phoneNumber],
        ['description', description]
      ]),
      isComplete,
      loading: false
    });
  };

  const update = () => {
    //setState({ ...state, loading: true });
    const url = `${auth.role}s/edit`;
    const reqBody = [...fields.entries()].reduce((accum, entry) => {
      console.log(entry, 'ENTRY');
      accum[entry[0]] = entry[1];
      return accum;
    }, {});

    console.log(reqBody, 'REQQ');
    axios.put(url, reqBody).then(() => {
      redirect();
    });
  };

  const redirect = () => {
    props.history.push(`${auth.role}/${auth.accountID}`);
  };
  const { loading, fields, isComplete } = state;
  if (!auth) return null;

  if (loading)
    return (
      <Dimmer active>
        <Loader></Loader>
      </Dimmer>
    );

  return (
    <Grid id="signup" columns={1} centered stackable>
      <Grid.Row columns={1} id="header-row">
        <Grid.Column textAlign="center">
          <Form inverted size="big" widths={16} error onSubmit={update}>
            <Header inverted as="h1">
              {' '}
              Update Your Profile{' '}
            </Header>
            {[...fields.entries()].map(entry => {
              const [key, value] = entry;
              return (
                <Form.Field key={key}>
                  <label>{key}</label>
                  <Input
                    value={value}
                    onChange={e => handleAllChanges(key, e)}
                  />
                </Form.Field>
              );
            })}
            <Button
              //disabled={!this.checkInput()}
              loading={loading}
              color="yellow"
              type="submit"
              fluid
            >
              {isComplete ? 'Update' : 'Update and Complete profile'}
            </Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default EditProfileForm;
