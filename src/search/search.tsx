import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}: any) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = (inputValue) => {

  }
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange} 
      loadOptions={loadOptions}    />
  )
}

export default Search;