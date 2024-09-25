import React from 'react';

const ForearmModel = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <iframe
        title="Forearm Muscles"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/e99a48318309451e98cd0638d4d84bdc/embed"
        style={{ width: '100%', maxWidth: '800px', height: '500px', border: 'none' }} 
      />
    </div>
  );
};

export default ForearmModel;
