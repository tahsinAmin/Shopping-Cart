import React from 'react'
import CartItems from './CartItems'
import PaymentInfo from './PaymentInfo'

function PaymentSide() {
   return (
      <div className='w-4/12 border border-black bg-white'>
         <CartItems/>
         <PaymentInfo/>
      </div>
   )
}

export default PaymentSide
