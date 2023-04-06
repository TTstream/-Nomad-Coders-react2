import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [need, setNeed] = useState(1);
  const [cost, setCost] = useState(1);
  const InputValue = (event) => {
    setNeed(event.target.value);
  };
  const onChange = (event) => {
    setCost(event.target.value);
    setNeed(1);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <>
          <select onChange={onChange}>
            <option>Select Coin!</option>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price}>
                {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <h2>Please enter the amount</h2>
          <input
            type="number"
            value={need}
            onChange={InputValue}
            placeholder="dollor"
          />
          $<h2>You can get {need / cost}</h2>
        </>
      )}
    </div>
  );
}
export default App;
