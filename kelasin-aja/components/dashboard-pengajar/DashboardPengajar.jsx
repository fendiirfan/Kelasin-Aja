import Link from "next/link"
import Konten from "../Kelas/Konten"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';

export default function DashboardPengajar({title, link}){
  const [loading2, setLoading2 ] = useState(true)
  const [konten, setKonten ] = useState([])
  const router = useRouter()

  useEffect(() => {
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
            setLoading2(false)
          })
        }).catch((err) => {
          console.log(err)
        })
        
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

  const handleKonten = (data1, data2, data3) => {
    const temp = data2.concat(data3)
    temp.sort(function(a, b) { 
      return a.created_at.localeCompare(b.created_at)
    });
    setKonten(data1.concat(temp))
  }

  useEffect(() => {
    console.log(konten)
  })


  return (
    <div className="flex flex-col w-[877px] mx-auto mt-[25px] border-2">
    <div className=' w-[877px] h-[245px] bg-[#C4C4C4] rounded-[10px] shadow'>
      <p className='text-[64px] text-white font-sans text-center mt-20'>KELAS {title}</p>
    </div>
    <div className='bg-white rounded-[10px] w-[877px] h-[231px] mt-[22px] shadow-lg'>
      <div >
        <div className='ml-10 mt-5'>
          <p className='text-[36px] font-bold'>Membuat Post</p>
        </div>
        <div className='ml-10 mt-20 flex justify-center'>
          <div className='grid grid-cols-3'>
            <Link href={link + "/BuatVideoConference"}>
              <button className='w-[252px] mr-[27px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow-lg'>
                Buat Video Conference
              </button>
            </Link>
            <Link href={link + "/BuatTugas"}>
              <button className='w-[252px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow'>
                Buat Tugas
              </button>
            </Link>
            <Link href={link + "/UploadFileMateri"}>
              <button className='w-[252px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow'>
                Upload Materi
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* <div className='bg-white rounded-[10px] w-[877px] h-[305px] mt-[22px] shadow-lg'>
      <div className='ml-10 mr-10 mt-5 border-b-2 border-black'>
        <p className='text-[50px] font-bold mb-10'>Tugas 1</p>
      </div>
      <div className='ml-10 mt-5'>
        <p className='text-[32px]'>Kumpulkan tugas 1 kalian!</p>
      </div>
    </div> */}
    {
      loading2 ? 
      <p className='py-2 animte-pulse'>Loading ...</p> :
      <div>
        {konten.map((data,index) => {
          return <Konten title={data.title} link={data.link} desc={data.description}/>
        })}
      </div>
    }
  </div>
  )
}