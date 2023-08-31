import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortby") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    // <Select
    //   options={options}
    //   type="white"
    //   value={sortBy}
    //   onChange={handleChange}
    // />
    <Select
      options={options}
      onChange={handleChange}
      type="white"
      value={sortBy}
    />
  );
}

export default SortBy;
