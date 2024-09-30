import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import FitnessSignIn from './components/fitness-sign-in/fitness-sign-in';
import FitnessTitleBanner from './components/fitness-title-banner/fitness-title-banner';
import FitnessSliderTile from './components/fitness-slider-tile/fitnesss-slider-tile';
import FitnessNavbar from './components/fitness-navbar/fitness-navbar';
import FitnessArmsContent from './components/fitness-content/arms/fitness-content-arms';
import FitnessChestContent from './components/fitness-content/chest/fitness-content-chest';
import FitnessBackContent from './components/fitness-content/back/fitness-back-content';
import FitnessLegsContent from './components/fitness-content/legs/fitness-legs-content';
import FitnessShoulderContent from './components/fitness-content/shoulders/fitness-shoulders-content';
import FitnessTricepContent from './components/fitness-content/triceps/fitness-tricep-content';

import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <Router>
      <FitnessNavbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <FitnessTitleBanner />
              <FitnessSliderTile />
            </>
          } 
        />
        <Route path="/arms" element={<FitnessArmsContent />} />
        <Route path="/chest" element={<FitnessChestContent />} />
        <Route path="/back" element={<FitnessBackContent />} />
        <Route path="/legs" element={<FitnessLegsContent />} />
        <Route path="/shoulders" element={<FitnessShoulderContent />} />
        <Route path="/triceps" element={<FitnessTricepContent />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
