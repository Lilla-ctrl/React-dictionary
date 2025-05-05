import Synonyms from "./Synonyms";

export default function meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong>
            <p>{definition.definition}</p>
            <br />
            <strong>Example:</strong>
            <em>{definition.example}</em>
            <br />
            <Synonyms synonyms={definition.syonyms} />
          </div>
        );
      })}
    </div>
  );
}
