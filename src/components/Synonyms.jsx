import "../style/Synonyms.css";

export default function Synonyms({ synonyms, onSynonymClick }) {
  if (synonyms) {
    return (
      <div>
        <ul className="synonyms">
          {synonyms.map(function (synonym, index) {
            return (
              <li
                key={index}
                onClick={() => onSynonymClick(synonym)}
                className="clickable-synonym"
              >
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
