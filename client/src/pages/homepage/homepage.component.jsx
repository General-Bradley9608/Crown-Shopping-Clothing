import React from 'react';

import Directory from '../../components/directory/directory.component';

// import './homepage.styles.scss';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  // throw Error;

  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
