import React, { useState, useEffect } from "react";

export default function Cards({ id }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonDetails = async () => {
    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      setLoading(true);
      const res = await fetch(api);
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setDetails(data);
      console.log("data from card:", data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && details && (
        <>
          <div className="card">
            <div className="image">
              <img src={details.sprites.front_default} alt="" />
            </div>
            <h1 className="name">{details.name}</h1>
          </div>
        </>
      )}
    </div>
  );
}
