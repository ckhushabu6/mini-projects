import React from "react";
import { usePokemon } from "../hooks/usePokemon";

const PokemonCard = () => {
  const {
    pokemon,
    nextPokemon,
    prevPokemon,
    selectPokemon,
    isFirst,
    isLast,
    pokemons
  } = usePokemon();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🐉 Pokemon Viewer</h1>

        {/* Dropdown */}
        <select
          value={pokemon.name}
          onChange={selectPokemon}
          style={styles.dropdown}
        >
          {pokemons.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Image */}
        <img
          src={pokemon.image}
          alt={pokemon.name}
          style={styles.image}
        />

        {/* Info */}
        <h2 style={styles.name}>{pokemon.name}</h2>
        <p style={styles.description}>{pokemon.description}</p>

        {/* Buttons */}
        <div style={styles.buttonContainer}>
          <button
            onClick={prevPokemon}
            disabled={isFirst}
            style={{
              ...styles.button,
              ...(isFirst ? styles.disabled : {})
            }}
          >
            ⬅ Prev
          </button>

          <button
            onClick={nextPokemon}
            disabled={isLast}
            style={{
              ...styles.button,
              ...(isLast ? styles.disabled : {})
            }}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #ACB6E5)"
  },

  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    width: "350px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },

  title: {
    marginBottom: "15px"
  },

  dropdown: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "100%",
    marginBottom: "20px",
    cursor: "pointer"
  },

  image: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px"
  },

  name: {
    textTransform: "capitalize",
    margin: "10px 0"
  },

  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px"
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "space-between"
  },

  button: {
    padding: "10px 15px",
    borderRadius: "10px",
    border: "none",
    background: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  },

  disabled: {
    background: "#ccc",
    cursor: "not-allowed"
  }
};