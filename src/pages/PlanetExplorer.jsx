
import { Link } from "react-router-dom";
import "./PlanetExplorer.css";

const planets = [
  {
    name: "Mercury",
    color: "#a8a8a8",
    fact: "The closest planet to the Sun.",
  },
  {
    name: "Venus",
    color: "#e5b66c",
    fact: "The hottest planet in our solar system.",
  },
  {
    name: "Earth",
    color: "#4b9bff",
    fact: "Our home planet, filled with life.",
  },
  {
    name: "Mars",
    color: "#e87555",
    fact: "Known as the Red Planet.",
  },
  {
    name: "Jupiter",
    color: "#d6a477",
    fact: "The largest planet in our solar system.",
  },
  {
    name: "Saturn",
    color: "#e4cf91",
    fact: "Famous for its beautiful rings.",
  },
  {
    name: "Uranus",
    color: "#8bd9df",
    fact: "An ice giant that rotates on its side.",
  },
  {
    name: "Neptune",
    color: "#5478f5",
    fact: "A distant, deep-blue ice giant.",
  },
];

export default function PlanetExplorer() {
  return (
    <div className="planet-explorer">
      <h1>Explore the Planets</h1>

      <p className="planet-intro">
        Journey through our solar system and discover its worlds.
      </p>

      <div className="planet-grid">
        {planets.map((planet) => (
          <Link
            to={`/planets/${planet.name.toLowerCase()}`}
            className="planet-card"
            key={planet.name}
          >
            <div
              className="planet-orb"
              style={{ backgroundColor: planet.color }}
            />

            <h2>{planet.name}</h2>

            <p>{planet.fact}</p>

            <span className="explore-link">
              Explore Planet →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
