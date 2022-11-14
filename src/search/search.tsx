import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./searchService";
import "./search.css";

const Search = ({ onSearchChange }: any) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  async function loadOptions(inputValue: any, loadedOptions: any) {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=50000&countryIds=us&types=city&namePrefix=${inputValue}`,
      geoApiOptions
    );
    const resJSON = await response.json();
    return {
      options: resJSON.data.map((city: any) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.region}`
        };
      }),
      hasMore: false,
    };
  }

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={1000}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="search-wrapper"
    />
  );
};

export default Search;
