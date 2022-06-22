import axios from "axios";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
// import { api } from "../../utils/apiHelpers";

const Login = () => {
  const router = useRouter()
  const [inputs, setInputs ] = useState({
    email : "",
    password : ""
  })

  const [error ,setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    if(ValidasiInput){
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then((res) => {
        // console.log(res)
        axios.post("http://127.0.0.1:8000/api/login", {
        email : inputs.email,
        password : inputs.password
      }).then((res) => {
        // console.log(res.data)
        Cookies.set('token', res.data.token)
        Cookies.set('user', JSON.stringify(res.data.user))
        setError("")
        RouteRedirect(res.data.user.jenis_user)
      }).catch((e) => {
        console.log(e)
        setError("Login Gagal")
      })
    })
    } else {
      setError("Input Tidak Boleh Kosong")
    }
  }

  const ValidasiInput = () => {
    if(inputs.email.length === 0 || inputs.password.length === 0){
      return false
    } else {
      return true
    }
  }

  const RouteRedirect = (role) => {
    if(role === "Admin"){
      router.push("/Admin/DaftarAkun")
    } else if (role === "Pelajar") {
      router.push("/Admin/DaftarAkun")
    } else if (role === "Pengajar") {
      router.push("/Admin/DaftarAkun")
    } else {
      router.push("/login")
    }
  }

  useEffect(() => {
   if(Cookies.get('user')){
    RouteRedirect(JSON.parse(Cookies.get('user')).jenis_user)
   } else {
    RouteRedirect('')
   }
  }, [])


  return(
    <div className="grid place-items-center h-[80vh] mx-auto">
      <div className="flex flex-col w-[450px] bg-white">
        <h1 className="text-center text-[64px] font-[700] leading-[72px]">Mulai</h1>
        <h1 className="text-center text-[48px] font-[700] leading-[96px]">Pembelajaranmu</h1>
        <form>
          <div>
            <label className="text-[18px] font-[400] leading-[27px]">Email</label>
            <input type="email" id="email" name="email" onChange={(e) => {setInputs({...inputs, [e.target.name] : e.target.value})}}
              className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="text-[18px] font-[400] leading-[27px]">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => {setInputs({...inputs, [e.target.name] : e.target.value})}}
              className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
            />
          </div>
          <div className="flex justify-center space-x-3 font-[700] text-[18px] leading-[27px] py-4">
            {/* <div>
              <input type="radio" value="Pelajar" id="Pelajar" name="Pelajar" onChange={(e) => {setInputs({...inputs, ['role'] : e.target.value})}}
                className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
              />
              <label className="m-0">Pelajar</label>
            </div>
            <div>
              <input type="radio" value="Pengajar" id="Pengajar" name="Pelajar" onChange={(e) => {setInputs({...inputs, ['role'] : e.target.value})}}
                  className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
              />
              <label>Pengajar</label>
            </div>
            <div>
              <input type="radio" value="Admin" id="Admin" name="Pelajar" onChange={(e) => {setInputs({...inputs, ['role'] : e.target.value})}}
                className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
              />
              <label>Admin</label>
            </div> */}
            <p className="text-red-700">
              {error}
            </p>
          </div>
          <button type="submit" className="w-full flex justify-center bg-black text-white p-3 rounded-[15px] tracking-wide font-[700] cursor-pointer" onClick={(e) => (handleLogin(e))}>
            Masuk
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;