import Head from 'next/head';

import Navbar from '../components/header/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
import Konten from '../components/Content-kelas/Konten';
import HeaderKelas from '../components/Content-kelas/HeaderKelas';

export default function DashboardKelas() {
  const data = ["HOME","Kelas A","Kelas B", "Kelas C"];
  const welcome = {user : "Fendi", pass : "classroom123"};
  console.log(welcome)
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className="flex h-screen" id="homeScreen">
        <Sidebar data={data}/>
        <div class="h-[100px] ml-[60px] mt-[110px]">
          <h1 class="text-white text-[50px]">Welcome, {welcome.user}</h1>
          <h2 class="text-white text-[30px]">Passwordnya {welcome.pass}</h2>
        </div>
        {/* <h1> Konten </h1> */}
      </div>
      <Footer/>
    </div>
  )
}
