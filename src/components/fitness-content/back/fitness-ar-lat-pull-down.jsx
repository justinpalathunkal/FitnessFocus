import React from 'react';

const BackLatPulldownModel = () => {
  return (
    <div className="sketchfab-embed-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <iframe
        title="Alternating Bicep Curl"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/4c2023e34c9543f9896001ebc7088286/embed"
        style={{ width: '100%', maxWidth: '800px', height: '500px', border: 'none' }} 
      />
    </div>
  );
};

export default BackLatPulldownModel;
