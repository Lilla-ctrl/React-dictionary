export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div>
      {props.phonetic.text}
      <br />
      audio: {props.phonetic.audio}
    </div>
  );
}
