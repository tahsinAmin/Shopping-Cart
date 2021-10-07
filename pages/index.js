import Head from 'next/head'
import { useState } from 'react'
import ProductSide from '../components/ProductSide'
import PaymentSide from '../components/PaymentSide'

export default function Home() {
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex px-2 w-full h-full bg-gray-100">
        <ProductSide />
        <PaymentSide cartItems={cartItems}/>
      </main>


    </div>
  )
}
