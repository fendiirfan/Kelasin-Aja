import axios from "axios"
import Link from "next/link"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function BuatVideoConference({title,id}){
  const [link,setLink] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
      .then((result) => {
        axios.patch('http://127.0.0.1:8000/api/Kelas/'+id,
        {
          link_code_conference:link
        },
        {
          headers : {
            'Authorization' : `Bearer ${Cookies.get('token')}`
          }
        }).then((res) => {
          setMessage("Link Berhasil dibuat")
        }).catch((err) => {
          console.log(err)
          setMessage("Kesalahan dalam membuat link")
        })
      })
  }
  return(
    <div className="flex flex-col mx-auto mt-[25px] border-2">
    <div className='  h-[245px] bg-[#C4C4C4] rounded-[10px] shadow'>
      <p className='text-[64px] text-white font-sans text-center mt-20'>KELAS {title}</p>
    </div>
    <div className='bg-white rounded-[10px] w-[877px] h-[582px] mt-[22px] shadow-lg'>
      <div className='ml-10 mr-10 mt-20 flex  justify-center '>
        <div className='flex items-center justify-center  mr-[44px] w-[242px] h-[401px] bg-[#F2F2F2] rounded-10 shadow-lg'>
          
          <Link href="https://meet.google.com/" passHref={true}>
            <a target="_blank">
              <button className='w-[179px] h-[39px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow'>
                Buat Link Meet
              </button>
            </a>
          </Link>
        </div>
        <div className='w-[488px] h-[401px]  bg-[#F2F2F2] rounded-10 shadow-lg'>
          <div className='border-1 ml-[20px] mr-[20px] mt-[35px] flex flex-col justify-center items-center'>
            <p className='text-center font-bold text-[24px]'>Input Link Video Conference</p>

            <div className='mt-[20px]'>
              <input name="link" onChange={(e) => {setLink(e.target.value)}}
                className="w-[447px] text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
              />
            </div>
            <button onClick={handleSubmit} class="bg-[#48D118] w-[179px] justify-center hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-[45px]">
              Submit
            </button>
            <p className='text-center text-[14px]'>{message}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}