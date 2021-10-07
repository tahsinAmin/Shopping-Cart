import React from 'react'

function PaymentInfo({total}) {
   return (
      <div className='text-xl mx-4 py-2 flex flex-col space-y-2'>
         <p className='flex justify-between'><span>Discount</span>  <span>BDT0.00</span></p>
         <p className='flex justify-between'><span>Subtotal</span>  <span>BDT6200.00</span></p>
         <p className='flex justify-between'><span>Tax(0%)</span>  <span>BDT0</span></p>
         <p className='flex justify-between'><span>Total</span>  <span>BDT6200.00</span></p>
         <button className='flex justify-between bg-purple-500 p-3 rounded-sm cursor-pointer hover text-white font-semibold'>
         <span>PAY</span>
         <span>BDT6200.00</span>
         </button>
      </div>
   )
}

export default PaymentInfo
