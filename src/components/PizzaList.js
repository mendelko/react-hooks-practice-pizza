import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, formData, setFormData }) {

  

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map(pizza => {
           return <Pizza key={pizza.id} 
                         topping={pizza.topping} 
                         size={pizza.size} 
                         vegetarian={pizza.vegetarian} 
                         pizza={pizza}
                         pizzas={pizzas}
                         formData={formData}
                         setFormData={setFormData}
                         />
        })}
      </tbody>
    </table>
  );
}

export default PizzaList;
