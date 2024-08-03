import { useQuery } from "@tanstack/react-query";
import { client } from "./sanity";

// Generic hook to fetch data based on a given query

// export const useFetch = (queryKey, query) => {
//   const fetchData = async () => {
//     const data = await client.fetch(query);
//     return data;
//   };

//   return useQuery(queryKey, fetchData);
// };

export const useFetch = (queryKey, query) => {
  const fetchProperties = async () => {
    const data = await client.fetch(query);
    return data;
  };

  return useQuery({
    queryKey, // array representing the query key
    queryFn: fetchProperties, // function to fetch data
  });
};
