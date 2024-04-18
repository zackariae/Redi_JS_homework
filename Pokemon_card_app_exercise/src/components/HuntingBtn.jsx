import { useState } from "react";

export default function HunitngBtn({ onClickHandler }) {
  return (
    <div>
      {" "}
      <button className="hunt-btn" onClick={onClickHandler}>
        Look for any Pokemons around
      </button>
    </div>
  );
}
