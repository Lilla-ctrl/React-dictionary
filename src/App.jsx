import "./App.css";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <>
      <div className="container">
        <header>
          Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="text-center">Coded by Lilla</footer>
    </>
  );
}

export default App;
