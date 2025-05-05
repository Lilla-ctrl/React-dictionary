import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.meanings/*[0]  .definitions
          .slice(0, 3) */
          .map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}
