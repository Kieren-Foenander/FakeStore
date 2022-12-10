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

export default function Product( props: TProduct) {
  return (
    <>
    <h1>{props.title}</h1>
    <img src={props.image}></img>
    <h2>{props.price}</h2>
    <h4>{props.category}</h4>
    <p>{props.description}</p>
    </>
    
  )
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