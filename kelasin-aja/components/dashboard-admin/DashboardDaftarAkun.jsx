import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Select from 'react-select';

export default function DashboardDaftarAkun(){
  const [inputs, setInputs] = useState({
    nama : "",
    password : "",
    email : "",
    role : "Pengajar"
  })

  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [data, setData] = useState()
  const [option, setOption] = useState()
  const [selectedOptions, setSelectedOptions] = useState(null);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "white",
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "#3A57E8" : "#D1D5DB",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      borderRadius :'12px',
      paddingLeft: '10px',
      border : "solid rgb(75 85 99) 1px"
    }),
    placeholder: (base) => ({
        ...base,
        color: "black",
        paddingLeft: '10px',
      }),
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((result) => {
      axios.get('http://127.0.0.1:8000/api/kelas', {
        headers : {
          'Authorization' : `Bearer ${Cookies.get('token')}`
        }
      }).then((res) => {
        setData(res.data)
        HandleData(res.data)
      }).catch((err) => {
        console.log(err)
        setError("Kesalahan dalam Get Data Kelas")
      })
    }).catch((err) => {
      console.log(err)
      setError("Kesalahan dalam get CSRF")
    });
  }, [])

  const HandleData = (data) => {
    const temp = []
    temp = data.map((data, index) => {
      return {value : data.id, label : data.nama}
    })
    setOption(temp)
  }

  // const temp = (e) => {
  //   e.preventDefault()
  //   ValidasiInput()
  // }

  const ValidasiInput = () => {
    const msg = false
    if (inputs.email.length === 0 || inputs.nama.length === 0 || inputs.password.length === 0 || selectedOptions === null){
      setError("ada yang kosong")
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email)) {
      setError("email masih salah")
    } else if (inputs.nama.length < 5){
      setError("Nama Kurang dari 8")
    } else if (inputs.password.length < 8){
      setError("Password Kurang dari 8")
    }else {
      return true
    }
    return msg
  }

  const HandlePostAkun = (e) => {
    e.preventDefault()
    console.log(inputs)
    console.log(selectedOptions)
    if(ValidasiInput()){
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((result) => {
        axios.post('http://127.0.0.1:8000/api/register', {   
          email : inputs.email,
          nama : inputs.nama,
          password : inputs.password,
          jenis_user : inputs.role,
        }).then((res) => {
          // console.log(res)
          selectedOptions.map((data, index) => {
              axios.post('http://127.0.0.1:8000/api/UserKelas', 
              { 
                namaUser: inputs.nama,
                email : inputs.email,
                kelas : data.label
              }, 
              {
              headers : {
                'Authorization' : `Bearer ${Cookies.get('token')}`
              }
            }).then((res) => {
              // console.log(res)
              setMessage("Akun dan Kelas Berhasil di daftarkan")
            }).catch((err) => {
              console.log(err)
              setError("Kesalahan Mendaftarkan User dengan Kelas")
            })
          })
        }).catch((err) => {
          console.log(err)
          setError("Kesalahan Mendaftarkan Akun")
        })
      }).catch((err) => {
        console.log(err)
        setError("Kesalahan dalam get CSRF")
      });
    }
  }

  useEffect(() => {
    setError("")
    setMessage("")
  }, [inputs])

  return(
  <div className="flex flex-col w-[510px] mx-auto mt-[70px]">
    <h1 className="text-left text-[36px] font-[700] leading-[54px]">Daftarkan Akun</h1>
    <form>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Nama</label>
        <input type="text" id="nama" name="nama" onChange={(e) => {setInputs({...inputs, [e.target.name] : e.target.value})}}
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Password</label>
        <input type="password" id="password" name="password" onChange={(e) => {setInputs({...inputs, [e.target.name] : e.target.value})}}
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Email</label>
        <input type="email" id="email" name="email" onChange={(e) => {setInputs({...inputs, [e.target.name] : e.target.value})}}
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Pilih Kelas</label>
        <Select
          onChange={setSelectedOptions}
          options={option}
          styles={customStyles}
          isMulti
          isSearchable
        />
        {/* <button className="text-[18px] leading-[27px] font-[600]" onClick={(e) => tanmbahPilihanKelas(e)}>+ Tambah Pilihan Kelas</button> */}
      </div>
      <div className="flex space-x-3 py-4">
        <div>
          <input type="radio" value="Pengajar" name="role" checked={inputs.role === "Pengajar"} onChange={(e) => setInputs({...inputs, [e.target.name] : e.target.value})}
            className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
          />
          <label className="m-0">Pengajar</label>
        </div>
        <div>
          <input type="radio" value="Pelajar" name="role" checked={inputs.role === "Pelajar"} onChange={(e) => setInputs({...inputs, [e.target.name] : e.target.value})}
            className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
          />
          <label className="m-0">Pelajar</label>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
        {
          error.length > 0 ? <p className="text-red-500 font-bold py-2">{error}</p> : ""
        }
        {
          message.length > 0 ? <p className="text-green-500 font-bold py-2">{message}</p> : ""
        }
        </div>
      </div>
      <div className="flex justify-center">

        <button type="submit" className="flex justify-center bg-black text-white py-3 px-10 rounded-[15px] tracking-wide font-[700] cursor-pointer" onClick={(e) => HandlePostAkun(e)}>
          SUBMIT
        </button>
      </div>
    </form>
  </div>
  )
}
