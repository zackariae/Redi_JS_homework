import "./styles.css";
import { useState, useEffect } from "react";
import Cards from "./components/Cards.jsx";
import HunitngBtn from "./components/HuntingBtn";
import Message from "./components/Message";

export default function App() {
  const [pokeInHand, setPokeInHand] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);
  const [pokemonID, setPokemonID] = useState(1);
  const [message, setMessage] = useState("");

  const fetchPokemons = async () => {
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    try {
      const res = await fetch(api);
      const data = await res.json();
      setPokemons(data);
      console.log(data);
    } catch (error) {}
  };
  const hunting = () => {
    if (pokeInHand.length < 6) {
      const randID = Math.floor(Math.random() * 150);
      setPokemonID(randID);
    } else {
      setMessage("Oops.. don't be greedy (: . max 6");
    }
  };
  const captur = () => {
    if (pokeInHand.length < 6) {
      setPokeInHand([...pokeInHand, pokemonID]);
    } else {
      setMessage("Oops.. don't be greedy. max:6 (:");
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [pokemonID]);

  return (
    <div className="App">
      <div className="captured">
        <span onClick={hunting}>Let it go</span>
        <Cards id={pokemonID} />
        <span onClick={captur}>Captur it</span>
      </div>
      <HunitngBtn onClickHandler={hunting} />
      {message && (
        <Message
          setPokeInHand={setPokeInHand}
          message={message}
          setMessage={setMessage}
        />
      )}

      <h1>The Captured pokemons</h1>
      <div className="card-container">
        {pokeInHand.map((pokemon_id, index) => {
          return <Cards key={index} id={pokemon_id} />;
        })}
      </div>
    </div>
  );
}

/**
 *
 * Task 1.
 * Lets do some set up
 * 1. We need to hold the state of the pokemon in the players hand,
 * it should be an array of numbers
 * 2. Create a new component for rendering cards,
 * it should take an id as a prop only and display that id in a h1
 * 3. Render a Pokemon Card component for each pokemon held
 * 4. test your code by iniializing the state of the pokemon held to be [1]
 *
 * Task 2.
 * Get the details of the pokemon held so that we can make a pokemon card
 * 1. Within the pokemon card component, we should hold the state of the pokemon's details,
 * but we dont have them yet
 * 2. Make a useState that runs each time the id prop changes
 * 3. Within the useEffect, we need to make a fetch call to the pokemon api, the address is https://pokeapi.co/api/v2/pokemon/
 * followed by the id of the pokemon you want the details of
 * 4. Set the returned data to the details state
 * 5. render the name of the pokemon in the card instead of the id
 *
 * Task 3.
 * We want a button for picking up cards
 * 1. Make a button that on click adds a number to the array of ids
 * 2. make sure that a new card is generated
 *
 *
 * Bonus tasks
 * 1. add an image using the image url within the data returned from the api,
 * You can find a list of images under the sprites key
 * 2. make the get new card button add a random number whole number to a maximum of 151
 * 3. allow player to only have a maximum of 6 pokemon in their hand
 * 4. using the information from the docs at https://pokeapi.co/ all a user to choose
 * which pokemon type they get.
 * Be aware that you might need to make multieple calls to find out the number of pokemon
 * available per type.
 * 5. Add a buton that allows the player to evolve thier pokemon using the evolution call on the api
 *  you can find details on the docs here: https://pokeapi.co/docs/v2#evolution-section
 *
 */
