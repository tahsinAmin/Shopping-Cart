import Head from 'next/head'
import ProductSide from '../components/ProductSide'
import PaymentSide from '../components/PaymentSide'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex px-2 w-full h-full bg-gray-100">
        <ProductSide/>
        <PaymentSide/>
      </main>


    </div>
  )
}
