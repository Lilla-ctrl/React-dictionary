export default function Phonetics(props) {
  return (
    <div>
      {props.phonetic.audio && (
        <span>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            <span>
              <i class="fa-solid fa-volume-high"></i>
            </span>
          </a>
        </span>
      )}
      <span>{props.phonetic.text}</span>
    </div>
  );
}
