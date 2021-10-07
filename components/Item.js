import React from 'react'

function Item({id, item, onAdd}) {
   return (
      <div
       key={item.id} 
       onClick={() => onAdd(item)}
       className="hover:scale-105 transition cursor-pointer bg-white shadow-xl rounded-sm">
         <div className="photo w-full bg-black h-36">
         {/* <Image src={`https://source.unsplash.com/50x50/?old`}
                     width='100vw'
                     height='100vh'
                     layout="relative"
                     className=''
         /> */}
         </div>
         <p className='truncate text-sm m-1'>{item.name}</p>
      </div>
   )
}

export default Item
