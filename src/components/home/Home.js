import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <address>
        Visit Us at the Nashville North Location
        <br />
        Loving care when you're not there.
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
    </>
  );
};

export default Home;