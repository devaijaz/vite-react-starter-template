import axios from "axios";
import { useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export const useFetch = (url: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .then(setUsers)
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { error, loading, users };
};
