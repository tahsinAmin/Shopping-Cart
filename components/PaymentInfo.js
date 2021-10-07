import React from 'react'

function PaymentInfo({total}) {
   return (
      <div className='text-xl mx-4 py-2 flex flex-col space-y-2'>
         <p className='flex justify-between'><span>Discount</span>  <span>BDT0.00</span></p>
         <p className='flex justify-between'><span>Subtotal</span>  <span>BDT1000</span></p>
         <p className='flex justify-between'><span>Tax(0%)</span>  <span>BDT0.00</span></p>
         <p className='flex justify-between'><span>Total</span>  <span>BDT1000</span></p>
         <button className='flex justify-between bg-indigo-700 p-3 rounded-sm cursor-pointer hover text-white font-semibold'>
         <span>Pay</span>
         <span>BDT{total}</span>
         </button>
      </div>
   )
}

export default PaymentInfo
