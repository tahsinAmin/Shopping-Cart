import React from 'react'
import { UserIcon, TrashIcon} from '@heroicons/react/outline'
import { useState } from 'react'

function Basket({ cartItems }) {
   return (
      <div>
         <div className="location border-black flex flex-col p-2 pt-4">
            <div className="flex space-x-2 items-center">
               <UserIcon className='h-4'/>
               <p className='font-semibold text-lg'>Add Customer</p>
            </div>
            <div className=" border-b-2 border-gray-200 mt-4 w-full"></div>
         </div>
         { cartItems.length === 0 && <div className='text-center text-xl mt-4'>Cart is empty</div>  }
         {/* <div className="mx-4 py-2 flex justify-between border-gray-300 border-b-2">
            <div className='flex space-x-4 items-center'>
               <div className='h-12 w-11 rounded-md border border-gray-400 relative'>
                  <div className="w-6 rounded-full bg-green-400 text-white text-center absolute -top-2 -right-2">1</div>
               </div>
               <div className='truncate'>Men Solid Casual Spread Shirt</div>
            </div>
            <div className='flex space-x-4 items-center'>
               <div>BDT12000.00</div>
               <TrashIcon className='h-4 cursor-pointer hover:scale-105'/>
            </div>
         </div> */}
      </div>
   )
}

export default Basket