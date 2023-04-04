import { useState, useEffect } from "react";

function Hello() {
  // Cleanup 1번째 방법
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  // Cleanup 2번째 방법
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
