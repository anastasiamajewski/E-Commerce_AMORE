import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

export default function Productdetails() {
  const [productData, setProductData] = useState([]);
  const [quantity, setQuantity] = useState([1]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => console.log("error", error));
  }, []);

  function addToCart(productId, name, price, quantity) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("productId", productId);
    urlencoded.append("name", name);
    urlencoded.append("price", price);
    urlencoded.append("quantity", quantity);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:8080/shoppingcart", requestOptions)
      .then((response) => response.text())
      .catch((error) => console.log("error", error));
  }

  return (
    <main>
      <h2>Platziere deine Bestellung!</h2>

      {productData.map((product) => (
        <ul key={product.id}>
          <li>{product.name}</li>
          <li>- {product.description}</li>
          <li>Preis: {product.price} €</li>
          <form>
            <label htmlFor="quantity">Anzahl: </label>
            <InputStyled
              id="quantity"
              placeholder="bitte eintragen"
              onChange={(e) => changeQuantity(e)}
            />
          </form>
          <ButtonStyled
            onClick={() =>
              addToCart(
                product.productId,
                product.name,
                product.price,
                product.quantity
              )
            }
          >
            den will ich haben!
          </ButtonStyled>
        </ul>
      ))}
    </main>
  );
  function changeQuantity(e) {
    setQuantity(e.target.value);
  }
}

const ButtonStyled = styled.button`
  background-color: #964f4c;
  color: white;
  font-size: 0.9em;
  display: flex;
  padding: 12px;
  margin-bottom: 12px;
  align-items: end;
  text-align: center;
`;
const InputStyled = styled.input`
  font-size: 1em;
`;
