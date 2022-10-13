import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defoltCity="Kyiv" />
        <footer>
          This project was coded by Antonina Korotkosh{" "}
          <a
            href="https://github.com/Korotkosh/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
