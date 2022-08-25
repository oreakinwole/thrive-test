import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Information from "./components/Information";
import { GET_USER_REPOS_AND_ORGS } from "./services/graphql";

const App = () => {
  const [termTemp, setTermTemp] = useState("");
  const [term, setTerm] = useState("");

  const { loading, data } = useQuery(GET_USER_REPOS_AND_ORGS, {
    variables: {
      login: term,
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(termTemp.toLocaleLowerCase());
  };

  const handleSetTerm = ({ target: { value } }) => {
    if (value === "") return setTermTemp("");
    setTermTemp(value);
  };

  return (
    <div className="mt-4 p-4">
      <form onSubmit={handleSearch} className="mb-5">
        <input
          type="search"
          className="form-control col-md-3 d-inline mr-3 align-middle"
          placeholder="Enter username"
          onChange={handleSetTerm}
        />

        <button type="submit" className="btn btn-primary d-inline align-middle">
          Search
        </button>
      </form>

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {data && (
        <div className="">
          <br />
          <Information
            repoData={data?.user?.repositories?.nodes || []}
            orgData={data?.user?.organizations?.nodes || []}
            username={term}
          />
        </div>
      )}
    </div>
  );
};

export default App;
