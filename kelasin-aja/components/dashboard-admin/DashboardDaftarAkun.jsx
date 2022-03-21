
export default function DashboardDaftarAkun(){
  return(
  <div className="flex flex-col w-[510px] mx-auto mt-[70px]">
    <h1 className="text-left text-[36px] font-[700] leading-[54px]">Daftarkan Akun</h1>
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
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Email</label>
        <input type="email" id="email" name="email"
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
      </div>
      <div>
        <label className="text-[18px] font-[400] leading-[27px]">Pilih Kelas</label>
        <input type="email" id="email" name="email"
          className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
        />
        <button className="text-[18px] leading-[27px] font-[600]">+ Tambah Pilihan Kelas</button>
      </div>
      <div className="flex space-x-3">
        <div>
          <input type="radio" value="Pelajar" id="Pelajar" name="Pelajar"
            className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
          />
          <label className="m-0">Pelajar</label>
        </div>
        <div>
          <input type="radio" value="Pelajar" id="Pelajar" name="Pelajar"
            className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
          />
          <label className="m-0">Pelajar</label>
        </div>
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
