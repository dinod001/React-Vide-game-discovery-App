import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchGenreResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requesConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  //fetching games
  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<FetchGenreResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requesConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setErrors(error.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};

export default useData;
