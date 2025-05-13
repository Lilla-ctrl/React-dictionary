import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "../style/Results.css";

export default function Results({ results, onSynonymClick }) {
  if (results) {
    return (
      <div className="results">
        <section>
          <h2>{results.word}</h2>
          {results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </section>

        {results.meanings.map(function (meaning, index) {
          return (
            <section className="meaning" key={index}>
              <Meaning meaning={meaning} onSynonymClick={onSynonymClick} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
