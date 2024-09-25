import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FitnessSignIn from './components/fitness-sign-in/fitness-sign-in';
import FitnessTitleBanner from './components/fitness-title-banner/fitness-title-banner';
import FitnessSliderTile from './components/fitness-slider-tile/fitnesss-slider-tile';
import FitnessNavbar from './components/fitness-navbar/fitness-navbar';
import FitnessArmsContent from './components/fitness-content/arms/fitness-content-arms';
import FitnessChestContent from './components/fitness-content/chest/fitness-content-chest';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FitnessSignIn /> */}
    <FitnessNavbar />
    {/* <FitnessTitleBanner /> */}
    {/* <FitnessSliderTile /> */}
    {/* <FitnessArmsContent /> */}
    <FitnessChestContent />
  </React.StrictMode>
);

reportWebVitals();
