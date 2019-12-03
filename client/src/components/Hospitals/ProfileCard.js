import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import './hospitals.css';
import Highlightable from '../Highlightable';

const ProfileCard = ({
  data: { accountID, name, description, address, phoneNumber, Account },
  searchWords,
  redirect
}) => {
  const imageSrc =
    Account &&
    Account.img &&
    Account.img !== null &&
    Account.img.includes('.') &&
    Account.img.includes('/')
      ? Account.img
      : 'https://react.semantic-ui.com/images/wireframe/image.png';

  return (
    <Card onClick={() => redirect(accountID)} className="hvr-grow centered">
      <Image>
        <div
          className="images"
          style={{ backgroundImage: 'url(' + imageSrc + ')' }}
        />
      </Image>
      <Card.Content>
        <Card.Header className="first-header" textAlign="center">
          <Highlightable
            green={true}
            textToHighlight={name}
            searchWords={searchWords}
          />
        </Card.Header>
        <Card.Header key={address} className="card-header" textAlign="center">
          <Highlightable
            green={true}
            textToHighlight={address}
            searchWords={searchWords}
          />
        </Card.Header>
        <Card.Header
          key={phoneNumber}
          className="card-header"
          textAlign="center"
        >
          <Highlightable
            green={true}
            textToHighlight={phoneNumber}
            searchWords={searchWords}
          />
        </Card.Header>
        <Card.Header
          key={description}
          className="card-header"
          textAlign="center"
        >
          <Highlightable
            green={true}
            textToHighlight={description}
            searchWords={searchWords}
          />
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

export default ProfileCard;
