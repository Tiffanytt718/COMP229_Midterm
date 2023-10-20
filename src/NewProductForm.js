import React, { useState } from "react";

function NewProductForm(){
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="form-container">
            <h2>New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>Description: </label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>Category: </label>
                    <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>Quantity: </label>
                    <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label>Price: </label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div className="button-group">
                    <button type="submit">SUBMIT</button>
                    <button type="button" onClick={() => setFormData({name: '', description: '', category: '', quantity: '', price: ''})}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}
export default NewProductForm;

