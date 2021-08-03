import React from "react";
import PizzaList from "./PizzaList";

function Pizza({ topping, size, vegetarian, pizza, setFormData, pizzas }) {

  function handleClick(id){
    const find = pizzas.find(p => p.id === id)
    setFormData(find)
    // fetch("http://localhost:3001/pizzas", {
    //   method: "PATCH",
    //   headers:{
    //     "content-type" : "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(resp => resp.json())
    // .then(data => setFormData(data))
  }


  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => handleClick(pizza.id)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
