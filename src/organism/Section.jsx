import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { globalUrl } from "../utils/apiRes";
import appStore from "../zustand/appStores";

function Section() {
  const [results, setResults] = useState([]);
  const searchValue = appStore((state) => state.inputSearch);
  const fetch = async () => {
    try {
      const response = await axios.get(`${globalUrl}?limit=70&offset=0`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: "firstdata",
    queryFn: fetch,
  });

  useEffect(() => {
    if (data) {
      setResults(data?.results);
    }
  }, [data]);

  useEffect(() => {
    if (searchValue === "") {
      setResults(data?.results);
    } else {
      const res =
        data?.results?.filter((item) => item.name.includes(searchValue)) ||
        data?.results;
      setResults(res);
    }
  }, [searchValue]);
  return (
    <div className="w-full flex flex-wrap justify-center gap-5 min-h-screen px-5 py-3">
      {isLoading ? <h1>Loading...</h1> : null}
      {isError ? <h1>Error fetching data</h1> : null}
      {results?.map((item, index) => (
        <Card key={index} name={item.name} />
      ))}
    </div>
  );
}

export default Section;
