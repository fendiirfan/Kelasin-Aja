import Link from "next/link"

export default function DashboardPengajar({title, link}){
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
    <div className='bg-white rounded-[10px] w-[877px] h-[305px] mt-[22px] shadow-lg'>
      <div className='ml-10 mr-10 mt-5 border-b-2 border-black'>
        <p className='text-[50px] font-bold mb-10'>Tugas 1</p>
      </div>
      <div className='ml-10 mt-5'>
        <p className='text-[32px]'>Kumpulkan tugas 1 kalian!</p>
      </div>
    </div>
  </div>
  )
}