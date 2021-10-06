import React from 'react'
import Image from 'next/image'

const items = [
   {
      id:1,
      name:"Blue Shirt",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:2,
      name:"Red Pant Circular Volarent",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:3,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:4,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:5,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:6,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:7,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:8,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:9,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:10,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:11,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:12,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:13,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:14,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
   {
      id:15,
      name:"Adidas",
      price:120,
      url:'https://source.unsplash.com/50x50/?man',
   },
]

function ProductSide() {
   return (
      <div className='w-8/12 border border-black p-2 flex flex-col justify-between'>
         <div className="flex-col space-y-3">
            <input className='w-full h-16 border-radius-10 px-3 rounded-md' type="text" placeholder='Search products ...' />
            <div className="all-items grid grid-cols-7 gap-4">
               {items.map((item) => {
                  return (
                     <div key={item.id} className="hover:scale-105 transition cursor-pointer bg-white shadow-xl rounded-sm">
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
               })}
            </div>
         </div>
         
         <div className="location border-t-2 border-black">
            Dhanmondi | Register 1 | New Sale
         </div>

      </div>
   )
}

export default ProductSide
