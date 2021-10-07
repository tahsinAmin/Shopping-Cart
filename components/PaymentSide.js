import React from 'react'
import Basket from './Basket'
import PaymentInfo from './PaymentInfo'

function PaymentSide({ cartItems, onRemove }) {
   // const total = cartItems.map(item => {
   //    const sum = 0;
   //    sum += item.price
   //    return sum;
   // })
   return (
      <div className='w-4/12 border border-black bg-white flex flex-col pb-6 justify-between'>
         <Basket cartItems={cartItems} onRemove={onRemove}/>
         <PaymentInfo/>
      </div>
   )
}

export default PaymentSide
