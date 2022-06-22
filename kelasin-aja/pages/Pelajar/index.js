import Head from 'next/head';
import Navbar from '../../components/header/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import Konten from '../../components/Kelas/Konten';
import HeaderKelas from '../../components/Kelas/HeaderKelas';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

export default function DashboardPelajar() {
  const router = useRouter()
  console.log(router.query)

  const [data, setData] = useState([{
    title : "home",
    link : "/Pelajar"
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
        link : "/Pelajar/" + data.class_id
      }
    })
    setData(data.concat(temp))
  }


  return (
    <div className="bg-slate-200">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className={ loading ? "h-screen" : "h-min-screen"}>
      {
        loading ?
        <p className='py-2 animte-pulse'>Loading ...</p>
        :
        <div className='flex bg-[url("/BackgroundHome.jpg")]'>
        <Sidebar data={data} active={0}/>
          <div className='flex justify-center w-screen py-6'>
            <p className='py-3 font-bold text-xl text-white'>
              {"Welcome " + JSON.parse(Cookies.get('user')).nama}
            </p>
          </div>
        </div>
      }
      </div>
      <div/>
      <Footer/>
    </div>
  )
}