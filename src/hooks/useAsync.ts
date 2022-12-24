import { useEffect, useState } from "react";

export default function useAsync<T>(handler: any, immediate: boolean = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function act(...args: any) {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);

      setData(data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);

      throw error;
    }
  }

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
