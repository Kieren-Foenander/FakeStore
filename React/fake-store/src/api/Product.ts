export const getProducts = () => {
    return (
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
    )
}

export const getProductById = (productId: number) => {
    return (
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
    )
}

export const getProductsByCategory = (category: string) => {
    return (
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => response.json())
    )
}

export const getProductsLimitedResults = (limit: number) => {
    return (
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(response => response.json())
    )
}
export const getProductsSortResults = (sortType: string) => {
    return (
        fetch(`https://fakestoreapi.com/products?sort=${sortType}`)
            .then(response => response.json())
    )
}
