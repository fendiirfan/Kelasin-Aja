import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const DashboardDaftarKelas = () =>{
  // Get Controller Text
  const [Nama, setNama] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Nama.length > 1){
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
        .then((result) => {
          axios.post('http://127.0.0.1:8000/api/BuatKelas', 
          { 
            nama: Nama,
          }, 
          {
          headers : {
            'Authorization' : `Bearer ${Cookies.get('token')}`
          }
        }).then((res) => {
          // console.log(res)
          setMessage("Kelas Berhasil Terbuat")
        }).catch((err) => {
          console.log(err)
          setError("Kesalahan Mendaftarkan Kelas")
        })
      }).catch((err) => {
        console.log(err)
        setError("Kesalahan dalam get CSRF")
      });
      // setMessage("Kelas Berhasil Terbuat")
    }else{
      setError("Nama Tidak Boleh Kosong")
    }
  }

  return(
    <div className="flex flex-col w-[510px] mx-auto mt-[70px]">
    <h1 className="text-left text-[36px] font-[700] leading-[54px]">Daftarkan Kelas</h1>
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Nama Kelas</label>
        <input type="text" id="nama" name="Nama" onChange={(e) => {setNama(e.target.value)}}
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div>
      {/* <div>
        <label className="text-[18px] font-[400] leading-[27px]">Code Kelas</label>
        <input type="email" id="email" name="email"
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div> */}
      <div className="flex justify-center">
        <div>
        {
          error.length > 0 ? <p className="text-red-500 font-bold pt-2">{error}</p> : ""
        }
        {
          message.length > 0 ? <p className="text-green-500 font-bold pt-2">{message}</p> : ""
        }
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <button type="submit" className="flex justify-center bg-black text-white py-3 px-10 rounded-[15px] tracking-wide font-[700] cursor-pointer" onClick={() => {setError(""); setMessage("")}}>
          SUBMIT
        </button>
      </div>
    </form>
  </div> 
  )
}

export default DashboardDaftarKelas