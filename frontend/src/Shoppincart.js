import React, { useState, useEffect } from "react";

export default function Shoppingcart() {
  const [shoppingcartData, setShoppingcartData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/shoppingcart")
      .then((response) => response.json())
      .then((data) => setShoppingcartData(data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <main>
      <h2>Dein Warenkorb</h2>
      <ul>
        {shoppingcartData.map((shoppingcart) => (
          <li key={shoppingcart.id}>
            {shoppingcart.name}
            {shoppingcart.price}
            {shoppingcart.quantity}
          </li>
        ))}
      </ul>
    </main>
  );
}
