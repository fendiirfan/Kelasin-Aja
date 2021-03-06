import Head from 'next/head';
import Navbar from '../../components/header/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import BuatFormTugas from '../../components/dashboard-pengajar/BuatFormTugas';
import UploadFileMateri from '../../components/dashboard-pengajar/UploadFileMateri';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function DashboardPengajar() {

  const [data, setData] = useState([{
    title : "home",
    link : "/Pengajar"
  }])
  const [loading, setLoading ] = useState(true)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((result) => {
      axios.get('http://127.0.0.1:8000/api/getKelasByIdUser/' + JSON.parse(Cookies.get('user')).id, {
        headers : {
          'Authorization' : `Bearer ${Cookies.get('token')}`
        }
      }).then((res) => {
        // setData(res.data)
        // HandleData(res.data)
        handleLinkSidebar(res.data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        // setError("Kesalahan dalam Get Data Kelas")
      })
    }).catch((err) => {
      console.log(err)
      // setError("Kesalahan dalam get CSRF")
    });
    // console.log(JSON.parse(Cookies.get('user')).id)
  }, [])

  const handleLinkSidebar = (respone) => {
    const temp = respone.map((data, index) => {
      return {
        title : data.nama,
        link : "/Pengajar/" + data.class_id
      }
    })
    setData(data.concat(temp))
  }

  return (
    <div className="bg-slate-200">
      <Head>
        <title>Daftar Akun</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className='flex'>
        <Sidebar data={data} active={0}/>
        <div className='ml-[500px]'>

          {/* <UploadFileMateri/> */}
          {
            loading 
            ?
            <p className='py-2 animte-pulse'>Loading ...</p>
            :
            <p className='font-bold'>Welcome {JSON.parse(Cookies.get('user')).nama}</p>
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}