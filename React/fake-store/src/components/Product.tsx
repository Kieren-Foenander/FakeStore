import { Link } from "react-router-dom"
import favourite from "../assets/favourite.svg"
import cart from "../assets/cart.svg"

export type TProduct = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export default function Product(props: TProduct) {
  return (
    <>
      <div className="group">
        <a key={props.id} href="/">
          <div className="aspect-w-1 aspect-h-1 w-full h-80 overflow-hidden rounded-lg bg-white-200 xl:aspect-w-7 xl:aspect-h-8 border-4 border-solid">
            <img
              src={props.image}
              className="h-full w-full object-contain object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{props.title}</h3>
        </a>
        <div className="flex flex-wrap justify-between">
          <p className="mt-1 text-lg font-medium text-gray-900">
            {props.price}
          </p>
          <div className="flex flex-wrap justify-between">
            <img
              src={favourite}
              alt="favourite"
              className="h-6 w-6 mt-1 mr-4 fill-current text-gray-900"
            />
            <img
              src={cart}
              alt="add to Cart"
              className="h-6 w-6 mt-1 mr-2 fill-current text-gray-900"
            />
          </div>
        </div>
      </div>
    </>
  )
}

{
  /* <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a> */
}

// sample Product
// {
//     "id":1,
//     "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price":109.95,
//     "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category":"men's clothing",
//     "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating":{
//         "rate":3.9,
//         "count":120
//     }
// }
