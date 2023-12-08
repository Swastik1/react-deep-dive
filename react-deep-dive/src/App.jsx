import React from 'react'
import { useState } from 'react'

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleIncreaseClick = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {...product, count: product.count + 1 }
        } else {
          return product;
        }
      })  
    )
  }

  const handleDecreaseClick = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId && product.count > 0) {
          return {...product, count: product.count - 1}
        } else {
          return product;
        }
      })
    )
  
  }

  const content = products.map((product) => {
    return (
      <li key={product.id}>
        {product.name} {" "}
        (<b>{product.count}</b>) {" "}
        <button onClick={handleIncreaseClick.bind(null,product.id)}>+</button>
        <button onClick={() => handleDecreaseClick(product.id)}>-</button>
      </li>
    )
  })

  return (
    <div>
      <ul>{content}</ul>
    </div>
  )
}

export default App