import Synonyms from "./Synonyms";
import "../style/Meaning.css";

export default function Meaning({ meaning, onSynonymClick }) {
  return (
    <div className="meaning-group">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map(function (definition, index) {
        return (
          <section key={index}>
            <strong>Meaning: </strong>
            <p>{definition.definition}</p>
            <br />
            {definition.example && (
              <>
                <strong>Example: </strong>
                <em>
                  <p>{definition.example}</p>
                </em>
                <br />
              </>
            )}
          </section>
        );
      })}

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <section>
          <strong>Synonyms: </strong>
          <Synonyms
            synonyms={meaning.synonyms}
            onSynonymClick={onSynonymClick}
          />
        </section>
      )}
    </div>
  );
}
