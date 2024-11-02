import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, urlInput) => {
  const [isData, setIsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!urlInput) {
        setError("Please enter a URL");
        return;
      }

      setIsLoading(true);
      setError(null);
      setResult(null);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
          body: JSON.stringify({
            url: urlInput,
            domain: "biillskiii",
            alias: customAlias || undefined,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to shorten URL");
        }

        setResult(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (urlInput) {
      fetchData();
    }
  }, [url, urlInput]);

  return { isData, isLoading, isError };
};

export default useFetch;
