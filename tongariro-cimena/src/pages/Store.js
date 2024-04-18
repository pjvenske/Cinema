import React, { useState } from 'react';

export default function Store() {
    const [cart, setCart] = useState([]);

    // Add a product to the cart
    const addToCart = (product) => {
        setCart(currentCart => [...currentCart, product]);
    };

    // Remove a product from the cart
    const removeFromCart = (product) => {
        setCart(currentCart => currentCart.filter(item => item.name !== product.name));
    };

    return (
        <div className="store">
            <div className="partner">
                <h2>Our Partner:</h2>
                <img src="./assets/corndog.jpg"></img>
                <h3>Q'ullean Catering</h3>
            </div>
            <div className="products">
                <h2>Our Products: </h2>
                <ul>
                    {['$20', '$50', '$100', '$200'].map((price, index) => (
                        <li key={index}>
                            <img src="./assets/gift-card-icon.webp" alt={`Gift card ${price}`}></img>
                            <div>Gift card {price}</div>
                            <button className="add-to-cart" onClick={() => addToCart({name: `Gift card ${price}`, img: "./assets/gift-card-icon.webp", price: Number(price)})}>Add to cart</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.img} alt={item.name}></img>
                            {item.name}
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="checkout">
                <h2>Checkout</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Credit card:
                        <input type="text" name="creditCard" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}