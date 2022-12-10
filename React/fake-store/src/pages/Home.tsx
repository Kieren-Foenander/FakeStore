import React, { useEffect, useState } from "react"
import { getProducts } from "../api/Product"
import Product, { TProduct } from "../components/Product"

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([])

//   function fetchProducts() {
//     try {
//       getProducts().then(setProducts)
//     } catch (error) {
//       console.error(`Could not get products ${error}`)
//     }
//   }

  useEffect(() => {
    getProducts().then(setProducts)
    console.log("rerendering")
}, []);

  return (
    <>
      <div>Home</div>
      {
      products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            description={product.description}
            image={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}
            category={product.category}
          />
        )
      })}
    </>
  )
}
