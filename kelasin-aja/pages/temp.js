import Head from 'next/head'

import Navbar from '../components/header/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'

export default function Home() {
  // const data = ["Home","Kelas A","Kelas B", "Kelas C"]
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className='flex'>
        {/* <Sidebar data={data}/> */}
        {/* <h1> Konten </h1> */}
      </div>
      <Footer/>
    </div>
  )
}
