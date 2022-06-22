import Head from 'next/head';

import Navbar from '../../../components/header/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import Footer from '../../../components/footer/Footer';
import Konten from '../../../components/Kelas/Konten';
import HeaderKelas from '../../../components/Kelas/HeaderKelas';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'

export default function DashboardKelas() {
  const router = useRouter()

  const [data, setData] = useState([{
    title : "home",
    link : "/Pelajar"
  }])
  const [loading, setLoading ] = useState(true)
  const [loading2, setLoading2 ] = useState(true)
  const [konten, setKonten ] = useState([])

  // {id : 1, title : "Quiz 1", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula turpis lorem, non convallis ante mollis nec. Duis id consequat metus, sed ornare ante. Sed a convallis augue. Fusce aliquet varius arcu, et fermentum nisi viverra ut. Vivamus eu laoreet purus. Etiam nunc mi, semper porta lacus eu, convallis molestie diam. Sed vitae neque ipsum. Curabitur sit amet libero non dolor suscipit tincidunt. Integer neque erat, sodales et dolor at, ullamcorper tristique nunc. Praesent eleifend pretium justo a aliquet.", button : "Kerjakan Quiz"},

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((result) => {
      axios.get('http://127.0.0.1:8000/api/getKelasByIdUser/' + JSON.parse(Cookies.get('user')).id, {
        headers : {
          'Authorization' : `Bearer ${Cookies.get('token')}`
        }
      }).then((res) => {
        // console.log(res)
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

  useEffect(() => {
    if(loading === false){
      var temp = []
      var temp2
      var temp3
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((result) => {
        axios.get('http://127.0.0.1:8000/api/kelas/' + router.query.id, {
          headers : {
            'Authorization' : `Bearer ${Cookies.get('token')}`
          }
        }).then((res) => {
          if(res.data.link_code_conference !== null){
            let konten_link = {
              title : "Link Conference",
              link : res.data.link_code_conference,
              desc : "Berikut adalah Link Conference"
            }
            temp.push(konten_link)
          } 
          axios.get("http://127.0.0.1:8000/api/exam/kelasid/" + router.query.id, {
            headers : {
              'Authorization' : `Bearer ${Cookies.get('token')}`
            }
          }).then((res) => {
            temp2 = res.data
            axios.get("http://127.0.0.1:8000/api/file/" +router.query.id, {
              headers : {
                'Authorization' : `Bearer ${Cookies.get('token')}`
              }
            }).then((res) => {
              temp3 = res.data
              // console.log(temp)
              temp2.forEach(function(obj) {
                obj.link = obj.link_embed_form;
                delete obj.link_embed_form;
              });
              // console.log(temp2)
              // console.log(temp3)
              handleKonten(temp, temp2, temp3)
            })
          }).catch((err) => {
            console.log(err)
          })
          setLoading2(false)
        }).catch((err) => {
          console.log(err)
          // setError("Kesalahan dalam Get Data Kelas")
        })
      }).catch((err) => {
        console.log(err)
        // setError("Kesalahan dalam get CSRF")
      });
    }
    
   
    // console.log(JSON.parse(Cookies.get('user')).id)
  }, [loading])

  const handleLinkSidebar = (respone) => {
    const temp = respone.map((data, index) => {
      return {
        title : data.nama,
        link : "/Pelajar/" + data.class_id
      }
    })
    setData(data.concat(temp))
  }

  const handleKonten = (data1, data2, data3) => {
    const temp = data2.concat(data3)
    temp.sort(function(a, b) { 
      return a.created_at.localeCompare(b.created_at)
    });
    setKonten(data1.concat(temp))
  }

  const SelectedSidebar = (data) => {
    for (let i = 0; i < data.length; i++){
      if(data[i].link === "/Pelajar/" + router.query.id){
        return i
      }
    }
  }

  useEffect(()=>{
    console.log(konten)
  }, [konten])

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
        <div className='flex'>
          <Sidebar data={data} active={SelectedSidebar(data)}/>
            <div class="flex-row mx-auto">
              <HeaderKelas data={data[SelectedSidebar(data)].title}/>
              {
                loading2 ? 
                <p className='py-2 animte-pulse'>Loading ...</p> :
                <div>
                  {konten.map((data,index) => {
                    return <Konten title={data.title} link={data.link} desc={data.description}/>
                  })}
                </div>
              }
              
            <div class="h-[80px]"></div> 
          </div>
        </div>
      }
        
        {/* <h1> Konten </h1> */}
      </div>
      <Footer/>
    </div>
  )
}