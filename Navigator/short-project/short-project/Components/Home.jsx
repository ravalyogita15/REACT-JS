import React from 'react';


function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <p className="home-description">Welcome to our website! We are glad to have you here.</p>
      <p className="home-description">
        This is a place where you can find the latest updates, news, and information about our services.
      </p>
      <img
        className="home-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrG1pMPPbEBCmqbsiMsdYaRtB2klNo8FGyg&s"
        alt="Placeholder Image"
      />
    </div>
  );
}

export default Home;
