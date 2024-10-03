import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import FitnessSignIn from './components/fitness-sign-in/fitness-sign-in';
import FitnessSignUp from './components/fitness-sign-up/fitness-sign-up';
import FitnessAbout from './components/fitness-about/fitness-about';
import FitnessTitleBanner from './components/fitness-title-banner/fitness-title-banner';
import FitnessSliderTile from './components/fitness-slider-tile/fitnesss-slider-tile';
import FitnessArmsContent from './components/fitness-content/arms/fitness-content-arms';
import FitnessChestContent from './components/fitness-content/chest/fitness-content-chest';
import FitnessBackContent from './components/fitness-content/back/fitness-back-content';
import FitnessLegsContent from './components/fitness-content/legs/fitness-legs-content';
import FitnessShoulderContent from './components/fitness-content/shoulders/fitness-shoulders-content';
import FitnessTricepContent from './components/fitness-content/triceps/fitness-tricep-content';
import FitnessNavbar from './components/fitness-navbar/fitness-navbar'; 

import reportWebVitals from './reportWebVitals';

const MainLayout = ({ children }) => {
  return (
    <>
      <FitnessNavbar />
      {children}
    </>
  );
};

const MainContent = () => {
  return (
    <>
      <FitnessTitleBanner />
      <FitnessSliderTile />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FitnessSignIn />} />
        <Route path="/signup" element={<FitnessSignUp />} />
        <Route 
          path="/home" 
          element={
            <MainLayout>
              <MainContent />
            </MainLayout>
          } 
        />
        <Route 
          path="/arms" 
          element={
            <MainLayout>
              <FitnessArmsContent />
            </MainLayout>
          } 
        />
        <Route 
          path="/chest" 
          element={
            <MainLayout>
              <FitnessChestContent />
            </MainLayout>
          } 
        />
        <Route 
          path="/back" 
          element={
            <MainLayout>
              <FitnessBackContent />
            </MainLayout>
          } 
        />
        <Route 
          path="/legs" 
          element={
            <MainLayout>
              <FitnessLegsContent />
            </MainLayout>
          } 
        />
        <Route 
          path="/shoulders" 
          element={
            <MainLayout>
              <FitnessShoulderContent />
            </MainLayout>
          } 
        />
        <Route 
          path="/triceps" 
          element={
            <MainLayout>
              <FitnessTricepContent />
            </MainLayout>
          } 
        />
        <Route 
          path="/about" 
          element={
            <MainLayout>
              <FitnessAbout />
            </MainLayout>
          } 
        />
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
