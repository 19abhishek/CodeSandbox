import "./styles.css";
import { useState, useEffect } from "react";

const list = ["Ahmedabad", "Banglore", "Delhi", "Mumbai", "Chennai", "Dhanbad"];

export default function App() {
  const [cities, setCities] = useState(list);
  const [val, setVal] = useState("");

  const handleInput = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    setCities(list.filter((city) => city.toLocaleLowerCase().includes(val)));
  }, [val]);

  return (
    <div className="App">
      <input type="text" value={val} onChange={handleInput} />
      <ul>
        {cities.map((city, idx) => {
          return <li key={idx}>{city}</li>;
        })}
      </ul>
    </div>
  );
}
