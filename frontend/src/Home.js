import React, { useState, useEffect } from 'react'

export default function Home() {
const [productData, setProductData] = useState([])

useEffect(() => {
    fetch("http://localhost:8080/products")
    .then(response => (response.json()))
    .then(data => setProductData(data))
    .catch(error => console.log('error', error))
  
  }, [])

return (
<main>
    <h2>Produkte</h2>
    <ul>
        {productData.map((product) => (
        
                <li key={product.id}>{product.name}</li>
    
        ))}
    </ul>   
</main>
    )
        
}