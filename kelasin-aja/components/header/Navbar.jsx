import {CgProfile} from 'react-icons/cg';

function Navbar(){
  return(
    <div className='flex justify-between bg-white border-b-2 border-black py-[10px] px-[20px]'>
      <div>
        <p className="font-bold text-[31px]">Kelasin</p>
      </div>
      <div className="flex self-center">
        <div className='flex'>
          <CgProfile className='text-[25px]'/>
          <span>Fendi</span>
        </div>
      </div>      
    </div>
  )
}

export default Navbar;