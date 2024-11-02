import React, { useState } from "react";
import Watermark from "./Watermark";
import Navbar from "./Navbar";
const UrlShortener = () => {
  const [urlInput, setUrlInput] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const shortenURL = async () => {
    if (!urlInput) {
      setError("Please enter a URL");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("https://api.tinyurl.com/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({
          url: urlInput,
          domain: "tiny.one",
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

  return (
    <div className="flex flex-col  min-h-screen pb-10 pt-5 justify-between">
      <Navbar />
      <div className="w-5/12 mx-auto p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">Lets Start!</h1>

        <div className="space-y-4">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Enter your URL here"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            value={customAlias}
            onChange={(e) => setCustomAlias(e.target.value)}
            placeholder="Custom alias (optional)"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={shortenURL}
            disabled={isLoading}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Processing..." : "Shorten URL"}
          </button>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-green-50 rounded">
            <p className="font-semibold">Shortened URL:</p>
            <a
              href={result.data.tiny_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 break-all"
            >
              {result.data.tiny_url}
            </a>
          </div>
        )}
      </div>
      <Watermark />
    </div>
  );
};

export default UrlShortener;
