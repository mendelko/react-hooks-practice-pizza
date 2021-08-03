import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])

  const [formData, setFormData] = useState({})
  

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(resp => resp.json())
    .then(data => setPizzas(data))
  }, [])

  return (
    <>
      <Header />
      <PizzaForm formData={formData} setFormData={setFormData}/>
      <PizzaList pizzas={pizzas} formData={formData} setFormData={setFormData}/>
    </>
  );
}

export default App;
