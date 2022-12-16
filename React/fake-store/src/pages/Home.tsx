import React, { useEffect, useState } from "react"
import { getProducts } from "../api/Product"
import Product, { TProduct } from "../components/Product"

export default function Home() {
  const [products, setProducts] = useState<TProduct[]>([])

  useEffect(() => {
    getProducts().then(setProducts)
    console.log("rerendering")
  }, [])

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
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
          </div>
        </div>
      </div>
    </>
  )
}
