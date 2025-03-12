import React from 'react'
export const laptops = [
    { id: 1, brand: 'Apple', model: 'MacBook Pro', price: 1299, ram: '16GB' },
    { id: 2, brand: 'Dell', model: 'XPS 13', price: 999, ram: '16GB' },
    { id: 3, brand: 'HP', model: 'Spectre x360', price: 1099, ram: '16GB' },
    { id: 4, brand: 'Lenovo', model: 'ThinkPad X1', price: 1199, ram: '16GB' },
    { id: 5, brand: 'Asus', model: 'ZenBook 14', price: 899, ram: '16GB' }
];

function Laptop() {
  return (
    <>
      {laptops.map((value) => {
        return (
          <>
            <h1>id:{value.id}</h1>
            <h1>brand:{value.brand}</h1>
            <h1>model:{value.model}</h1>
            <h1>price:{value.price}</h1>
            <h1>ram:{value.ram}</h1>
            <hr />
          </>
        )
      })}
    </>
  )
}
export default Laptop
