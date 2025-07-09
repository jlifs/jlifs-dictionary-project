import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
      event.preventDefault();

      // documentation: https://www.shecodes.io/learn/apis/dictionary
      let apiKey = "e4a0o883f7063taaf10b8438bb5de43f";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
       </div>
    );
}