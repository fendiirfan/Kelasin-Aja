import Head from 'next/head';

import Navbar from '../components/header/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import Konten from '../components/Content-kelas/Konten';
import HeaderKelas from '../components/Content-kelas/HeaderKelas';

export default function DashboardKelas() {
  const data = ["HOME","Kelas A","Kelas B", "Kelas C"];
  const dataKelas = "KELAS A";
  const konten = [
    {id : 1, title : "Quiz 1", desc : "Kerjakan tidak boleh mencontek", button : "Kerjakan Quiz"},
    {id : 2, title : "Video Conference", desc : "Video Conference 20/01/2022", button : "Join"},
    {id : 3, title : "Materi 1", desc : "Silahkan Download materi ini", button : "Download Materi"},
  ]
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className='flex h-screen'>
        <Sidebar data={data}/>
        <div class="flex-row mx-auto">
          <HeaderKelas data={dataKelas}/>
          {konten.map((data, dataIdx) => {
            return (
                <Konten key={dataIdx} data={data}/>
            )
          })}
        </div>
        {/* <h1> Konten </h1> */}
      </div>
      <Footer/>
    </div>
  )
}
