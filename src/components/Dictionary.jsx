import { useState } from "react";
import "../style/Dictionary.css";
import Results from "./Results";
import Pictures from "./Pictures";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [pictures, setPictures] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    setPictures(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imageApiKey = "3et61975bb6d4a4foabfddbded4a0a8e";

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
          <input
            placeholder="Which word are you interested in?"
            type="search"
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Results results={results} onSynonymClick={handleSynonymClick} />
      <Pictures pictures={pictures} />
    </div>
  );
}
