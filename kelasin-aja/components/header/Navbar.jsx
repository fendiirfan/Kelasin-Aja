import axios from 'axios';
import Cookies from 'js-cookie';
import {CgProfile} from 'react-icons/cg';
import { useRouter } from 'next/router';

function Navbar(){
  // const[Name, setName] = useState("")

  // axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
  //   .then((res) => {
  //     axios.get('http://127.0.0.1:8000/api/BuatKelas')
  //   })
  const router = useRouter()
  return(
    <div className='flex justify-between bg-white border-b-2 border-black py-[10px] px-[20px]'>
      <div>
        <p className="font-bold text-[31px]">Kelasin</p>
      </div>
      <div className="flex self-center">
        <div className='flex'>
          <CgProfile className='text-[25px]'/>
          <span>{
            Cookies.get('user')? <p>{JSON.parse(Cookies.get('user')).nama}</p>: "login"
          }</span>
        </div>
      </div>      
    </div>
  )
}

export default Navbar;