import { createContext } from 'react'

const ProductsContext = createContext({
  products: [
    {
      productName: 'Iphone',
      id: '1234fewf345'
    }
  ],
})

export { ProductsContext }
