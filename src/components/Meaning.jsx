export default function meaning(props) {
  console.log(props.meaning);
  return <h3>{props.meaning.partOfSpeech}</h3>;
}
