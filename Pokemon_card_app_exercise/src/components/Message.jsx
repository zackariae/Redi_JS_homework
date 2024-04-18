export default function Message({ setPokeInHand, message, setMessage }) {
  const reset = () => {
    setPokeInHand([]);
    setMessage("");
  };
  return (
    <div className="card-container">
      <h1 className="msg">{message}</h1>
      <button className="btn-reset" onClick={reset}>
        reset
      </button>
    </div>
  );
}
