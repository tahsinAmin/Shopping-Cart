import React from 'react'
import Item from './Item'

function ProductSide({ items,onAdd }) {
   return (
      <div className='w-8/12 border border-black p-2 flex flex-col justify-between'>
         <div className="flex-col space-y-3">
            <input className='w-full h-16 border-radius-10 px-3 rounded-md' type="text" placeholder='Search products ...' />
            <div className="all-items grid grid-cols-7 gap-4">
               {items.map((item) => {
                  return (
                     <Item key={item.id} item={item} onAdd={onAdd}/>
                  )
               })}
            </div>
         </div>
         
         <div className="location border-t-2 border-black flex justify-between pt-2">
            <p>Dhanmondi | Register 1 | New Sale</p>
            <div className="flex space-x-2">
               <button className='bg-white py-1 px-2 rounded-md font-semibold border border-gray-400'>Options</button>
               <button className='bg-white py-1 px-2 rounded-md font-semibold border border-gray-400'>New Sales</button>
            </div>
         </div>

      </div>
   )
}

export default ProductSide
