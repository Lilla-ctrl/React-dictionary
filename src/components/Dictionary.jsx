import { useState } from "react";
import "../style/Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSynonymClick(synonym) {
    setKeyword(synonym);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${synonym}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="dictionary">
      <section>
        <form onSubmit={search}>
          <input placeholder="Which word are you interested in?" type="search" onChange={handleKeywordChange} />
        </form>
      </section>
      <Results results={results} onSynonymClick={handleSynonymClick}/>
    </div>
  );
}
