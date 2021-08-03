import React from "react";

function PizzaForm({formData, setFormData}) {

  

  function handleSubmit(){
    fetch("http://localhost:3001/pizzas", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({
        topping: formData.topping,
        size: formData.size,
        vegetarian: formData.vegetarian
      })
    })
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
           defaultValue={formData.topping}
            onChange={handleChange}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            />
        </div>
        <div className="col">
          <select onChange={handleChange} value={formData.size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              defaultValue={formData.vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              defaultValue={formData.id}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button onSubmit={handleSubmit} type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
