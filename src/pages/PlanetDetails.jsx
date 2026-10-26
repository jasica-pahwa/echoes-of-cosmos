
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import planetFacts from "../data/PlanetFacts.js";
import "./PlanetDetails.css";

const planetColors = {
  mercury: "#aaa9a8",
  venus: "#e5b66c",
  earth: "#398cff",
  mars: "#ed7655",
  jupiter: "#d6a477",
  saturn: "#e4cf91",
  uranus: "#8bd9df",
  neptune: "#5478f5",
};

const planetNames = [
  "Mercury", "Venus", "Earth", "Mars",
  "Jupiter", "Saturn", "Uranus", "Neptune"
];

export default function PlanetDetails() {
  const { planetName } = useParams();

  const [activeFact, setActiveFact] = useState(null);
  const [randomFact, setRandomFact] = useState(null);

  const key = planetName.toLowerCase();
  const planet = planetFacts[key];
  const color = planetColors[key] || "#8ba8ff";

  if (!planet) {
    return (
      <div className="planet-details-page">
        <h1>Planet not found</h1>
        <Link to="/planets">← Back to Planets</Link>
      </div>
    );
  }

  function surpriseMe() {
    const index = Math.floor(
      Math.random() * planet.facts.length
    );

    setRandomFact(planet.facts[index]);
    setActiveFact(index);
  }

  return (
    <div
      className="planet-details-page"
      style={{ "--planet-color": color }}
    >
      <Link className="back-link" to="/planets">
        ← Return to the Solar System
      </Link>

      <div className="planet-hero">
        <div className="hero-planet" />

        <div className="hero-content">
          <p className="eyebrow">COSMIC EXPLORATION / 0{planetNames.indexOf(
            planetNames.find(
              (item) => item.toLowerCase() === key
            )
          ) + 1}</p>

          <h1>{planetNames.find(
            (item) => item.toLowerCase() === key
          )}</h1>

          <p className="planet-description">
            {planet.intro}
          </p>

          <button
            className="surprise-button"
            onClick={surpriseMe}
          >
            ✦ Discover a Cosmic Secret
          </button>
        </div>
      </div>

      {randomFact && (
        <div className="random-fact">
          <span>✧ YOUR COSMIC DISCOVERY</span>
          <p>{randomFact}</p>
        </div>
      )}

      <div className="planet-selector">
        <p className="eyebrow">CHOOSE YOUR NEXT DESTINATION</p>

        <div className="planet-pills">
          {planetNames.map((name) => (
            <Link
              key={name}
              to={`/planets/${name.toLowerCase()}`}
              className={
                name.toLowerCase() === key
                  ? "planet-pill active"
                  : "planet-pill"
              }
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      <section className="facts-section">
        <p className="eyebrow">TRANSMISSION RECEIVED</p>
        <h2>Secrets of {planetNames.find(
          (item) => item.toLowerCase() === key
        )}</h2>
        <p className="facts-hint">
          Select a discovery to reveal its cosmic secret.
        </p>

        <div className="facts-grid">
          {planet.facts.map((fact, index) => (
            <button
              key={index}
              className={
                activeFact === index
                  ? "fact-card revealed"
                  : "fact-card"
              }
              onClick={() =>
                setActiveFact(
                  activeFact === index ? null : index
                )
              }
            >
              <span className="fact-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="fact-content">
                {activeFact === index
                  ? fact
                  : "Tap to uncover this discovery"}
              </span>

              <span className="fact-symbol">
                {activeFact === index ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
