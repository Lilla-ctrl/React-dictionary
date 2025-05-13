export default function Phonetics(props) {
  return (
    <div>
      <div>{props.phonetic.text}</div>
      {props.phonetic.audio && (
        <div>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            🔊
          </a>
        </div>
      )}
    </div>
  );
}