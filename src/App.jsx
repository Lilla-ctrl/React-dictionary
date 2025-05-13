import "./App.css";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <>
      <div className="container">
        <header>Dictionary</header>
        <main>
          <Dictionary />
          <footer>
            <strong>
              <a
                className="footer-link"
                href="https://github.com/Lilla-ctrl/react-dictionary"
              >
                Coded{" "}
              </a>
            </strong>
            by
            <strong>
              <a className="footer-link" href="https://github.com/Lilla-ctrl">
                {" "}
                Lilla.
              </a>
            </strong>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
