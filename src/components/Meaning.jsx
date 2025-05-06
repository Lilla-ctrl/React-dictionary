import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
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
          </div>
        );
      })}
      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <>
          <strong>Synonyms: </strong>
          <Synonyms synonyms={props.meaning.synonyms} />
        </>
      )}
    </div>
  );
}
