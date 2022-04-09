import Head from 'next/head';
import Navbar from '../../components/header/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import BuatFormTugas from '../../components/dashboard-pengajar/BuatFormTugas';
import UploadFileMateri from '../../components/dashboard-pengajar/UploadFileMateri';

export default function DashboardPengajar() {
  const data = ["Pendaftaran Akun","Pendaftaran Kelas"]
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Daftar Akun</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className='flex'>
        <Sidebar data={data}/>
        <div className='ml-[500px]'>
          <UploadFileMateri/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}