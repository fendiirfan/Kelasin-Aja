import DashboardDaftarKelas from "../../components/dashboard-admin/DashboardDaftarKelas";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from '../../components/footer/Footer';
import Head from 'next/head';

const DaftarKelas = () => {
  const data = ["Pendaftaran Akun","Pendaftaran Kelas"];
	return(
		<div className="bg-slate-200">
      <Head>
        <title>Daftar Kelas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className='flex'>
        <Sidebar data={data}/>
        <DashboardDaftarKelas/>
      </div>
      <Footer/>
    </div>
	)
}

export default DaftarKelas;