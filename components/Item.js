import React from 'react'
import Image from 'next/image'

function Item({id, item, onAdd}) {
   return (
      <div
       key={item.id} 
       onClick={() => onAdd(item)}
       className="hover:scale-105 transition cursor-pointer bg-white shadow-xl rounded-md">
         <div className="w-full h-36 relative">
         <Image src={item.url} layout="fill" className='rounded-t-md' />
         </div>
         <p className='truncate text-sm m-1'>{item.name}</p>
      </div>
   )
}

export default Item
