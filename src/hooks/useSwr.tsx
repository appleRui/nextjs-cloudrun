import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const useSwr = (key: string) => {
  const { data, error } = useSWR(key, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
}

export default useSwr;