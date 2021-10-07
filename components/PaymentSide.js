import React from 'react'
import Basket from './Basket'
import PaymentInfo from './PaymentInfo'

function PaymentSide({ cartItems }) {
   return (
      <div className='w-4/12 border border-black bg-white flex flex-col pb-6 justify-between'>
         <Basket cartItems={cartItems}/>
         <PaymentInfo/>
      </div>
   )
}

export default PaymentSide
