import Synonyms from "./Synonyms";
import "../style/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning-group">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <section key={index}>
            <strong>Definition: </strong>
            <p>{definition.definition}</p>
            <br />
            {definition.example && (
              <>
                <strong>Example: </strong>
                <em>{definition.example}</em>
                <br />
              </>
            )}
          </section>
        );
      })}
      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <section>
          <strong>Synonyms: </strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </section>
      )}
    </div>
  );
}
