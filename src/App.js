import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const add = (num1, num2) => {
    console.log("Adding numbers");
    return parseInt(num1, 10) + parseInt(num2, 10);
  };
  const answer = useMemo(() => {
    return add(inputA, inputB);
  }, [inputA, inputB]);
  const handleChangeA = (event) => {
    setInputA(event.target.value);
  };
  const handleChangeB = (event) => {
    setInputB(event.target.value);
  };
  return (
    <div className="App">
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="text" onChange={handleChangeA} />
      <input type="text" onChange={handleChangeB} />
      <h1>{answer}</h1>
    </div>
  );
}
