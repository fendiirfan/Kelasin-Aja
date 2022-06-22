

export default function BuatVideoConference({title}){
  return(
    <div className="flex flex-col mx-auto mt-[25px] border-2">
    <div className='  h-[245px] bg-[#C4C4C4] rounded-[10px] shadow'>
      <p className='text-[64px] text-white font-sans text-center mt-20'>KELAS {title}</p>
    </div>
    <div className='bg-white rounded-[10px] w-[877px] h-[582px] mt-[22px] shadow-lg'>
      <div className='ml-10 mr-10 mt-20 flex  justify-center '>
        <div className='flex items-center justify-center  mr-[44px] w-[242px] h-[401px] bg-[#F2F2F2] rounded-10 shadow-lg'>
          <button className='w-[179px] h-[39px] bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow'>
            Buat Link Meet
          </button>
        </div>
        <div className='w-[488px] h-[401px]  bg-[#F2F2F2] rounded-10 shadow-lg'>
          <div className='border-1 ml-[20px] mr-[20px] mt-[35px] flex flex-col justify-center items-center'>
            <p className='text-center font-bold text-[24px]'>Input Link Video Conference</p>

            <div className='mt-[20px]'>
              <input name="link"
                className="w-[447px] text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
              />
            </div>
            <button class="bg-[#48D118] w-[179px] justify-center hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-[45px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}