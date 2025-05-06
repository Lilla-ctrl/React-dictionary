export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return <div>{props.synonyms}</div>;
  } else {
    return null;
  }
}
