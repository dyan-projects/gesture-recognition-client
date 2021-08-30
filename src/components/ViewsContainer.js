import React from 'react';
import { Router } from '@reach/router';

import GestureRecognition from './GestureRecognition';
import AdsView from './AdsView';
import HomeView from './HomeView';

const ViewsContainer = () => {
  return (
    <div>
      <div>
        <GestureRecognition />
      </div>
      <Router>
        <HomeView path="/" />
        <AdsView path="/ads" />
      </Router>
    </div>
  );
};

export default ViewsContainer;
