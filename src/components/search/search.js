import { Input } from "@mui/material";
import React from "react";
import "./search.css";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <Input
        placeholder="Rechercher une image"
        className="search-input"
        disableUnderline
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
