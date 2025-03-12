import React from 'react'
export const smartphone = [
  { id: 1, brand: 'Apple', model: 'iPhone 13', price: 999, storage: '128GB' },
  { id: 2, brand: 'Samsung', model: 'Galaxy S21', price: 799, storage: '256GB' },
  { id: 3, brand: 'Google', model: 'Pixel 6', price: 599, storage: '128GB' },
  { id: 4, brand: 'OnePlus', model: 'OnePlus 9', price: 729, storage: '256GB' },
  { id: 5, brand: 'Xiaomi', model: 'Mi 11', price: 749, storage: '128GB' }
];

function Smartphone() {
  return (
    <>
      {smartphone.map((value) => {
        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>brand:{value.brand}</h1>
            <h1>model:{value.model}</h1>
            <h1>price:{value.price}</h1>
            <h1>storage:{value.storage}</h1>
            <hr />
          </>
        )
      })}      
    </>
  )
}
export default Smartphone