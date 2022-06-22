import Head from 'next/head'

import Navbar from '../components/header/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Footer from '../components/footer/Footer'

export default function Home() {
  const data = [
    {
      title : "Pendaftaran Akun",
      link : "/Admin/DaftarAkun"
    },
    {
      title : "Pendaftaran Kelas",
      link : "/Admin/DaftarKelas"
    }
  ]
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className='flex'>
        <Sidebar data={data}/>
        <div className="flex flex-col w-[877px] mx-auto mt-[25px] border-2">
          <div className=' w-[877px] h-[245px] bg-[#C4C4C4] rounded-[10px] shadow'>
            <p className='text-[64px] text-white font-sans text-center mt-20'>KELAS A</p>
          </div>
          <div className='bg-white rounded-[10px] w-[877px] h-[231px] mt-[22px] shadow-lg'>
            <div >
              <div className='ml-10 mt-5'>
                <p className='text-[36px] font-bold'>Membuat Post</p>
              </div>
              <div className='ml-10 mt-20 flex justify-center'>
                <div className='grid grid-cols-3'>
                  <button className='w-[252px] mr-[27px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow-lg'>
                    Buat Video Conference
                  </button>
                  <button className='w-[252px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow'>
                    Buat Tugas
                  </button>
                  <button className='w-[252px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow'>
                    Upload Materi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-[10px] w-[877px] h-[305px] mt-[22px] shadow-lg'>
            <div className='ml-10 mr-10 mt-5 border-b-2 border-black'>
              <p className='text-[50px] font-bold mb-10'>Tugas 1</p>
            </div>
            <div className='ml-10 mt-5'>
              <p className='text-[32px]'>Kumpulkan tugas 1 kalian!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}