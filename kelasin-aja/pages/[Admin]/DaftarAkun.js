import Head from 'next/head';
import Navbar from '../../components/header/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import DashboardDaftarAkun from '../../components/dashboard-admin/DashboardDaftarAkun';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Daftar Akun</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <DashboardDaftarAkun/>
      </div>
      <Footer/>
    </div>
  )
}
