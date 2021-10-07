import Head from 'next/head'
import { useState } from 'react'
import ProductSide from '../components/ProductSide'
import PaymentSide from '../components/PaymentSide'
import items from '../components/items'

export default function Home() {
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find(item => item.id ===product.id);
    const len = cartItems.length;
    if (!exist) {
      setCartItems([...cartItems, {id:len, name:product.name, price:product.price, url:product.url}])
    }
  }
  const onRemove = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id))
  }
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex px-2 w-full h-full bg-gray-100">
        <ProductSide items={items} onAdd={onAdd}/>
        <PaymentSide cartItems={cartItems} onRemove={onRemove}/>
      </main>


    </div>
  )
}
