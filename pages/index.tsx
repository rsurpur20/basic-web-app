import { useState } from "react";
import QueryProcessor from "../utils/QueryProcessor";

export default function Home() {
  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <h1>Welcome!!</h1>
      <p>Please enter your query in the box below:</p>
      <input
        type="text"
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
      />
      <p>{query}</p>
      <div>
        {QueryProcessor(query) == "" ? "No Matches" : QueryProcessor(query)}
      </div>
    </div>
  );
}
