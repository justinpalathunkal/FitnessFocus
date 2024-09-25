import React from 'react';

const BicepCurlModel = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <iframe
        title="Alternating Bicep Curl"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/18f9cc1e40c3423f92058f3b7e1d6c1b/embed"
        style={{ width: '100%', maxWidth: '800px', height: '500px', border: 'none' }} 
      />
    </div>
  );
};

export default BicepCurlModel;
