
const DashboardDaftarKelas = () =>{
  return(
    <div className="flex flex-col w-[510px] mx-auto mt-[70px]">
    <h1 className="text-left text-[36px] font-[700] leading-[54px]">Daftarkan Kelas</h1>
    <form>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Nama</label>
        <input type="email" id="email" name="email"
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Password</label>
        <input type="email" id="email" name="email"
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="flex justify-center bg-black text-white py-3 px-10 rounded-[15px] tracking-wide font-[700] cursor-pointer" onClick={() => (console.log("Pencet"))}>
          SUBMIT
        </button>
      </div>
    </form>
  </div> 
  )
}

export default DashboardDaftarKelas