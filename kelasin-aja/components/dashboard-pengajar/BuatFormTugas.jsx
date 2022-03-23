export default function BuatFormTugas(){
    return(
        <div>
            <div className='flex w-[877px] h-[245px] border-2 border-black items-center justify-center bg-[#C4C4C4] rounded-[8px] shadow-lg'>
            KELAS A
            </div>
            <div className='flex w-[877px] h-[582px] border-2 border-black items-center bg-[#ffffff] rounded-[8px] mt-[30px] shadow-lg'>
                <div className='flex w-[242px] h-[496px] bg-[#F2F2F2] ml-[30px] items-center justify-center rounded-[8px] shadow-lg'>
                    <button type="submit" className="flex justify-center bg-[#777777] text-white py-2 px-10 rounded-[8px] tracking-wide font-[700] cursor-pointer" onClick={() => (console.log("Pencet"))}>
                    Buat Link Embed
                    </button>
                </div>
                <div className='w-[530px] h-[496px] bg-[#F2F2F2] ml-[30px] items-center justify-center rounded-[8px] shadow-lg p-10'>
                    <h1 className="text-left text-[36px] font-[700] leading-[54px]">Buat Form Tugas</h1>
                    <form>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Judul Tugas</label>
                        <input type="judul" id="judul" name="judul"
                        className="w-full text-base px-4 py-4 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Link Embed Form</label>
                        <input type="Link" id="Link" name="Link"
                        className="w-full text-base px-4 py-4 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Deskripsi Tugas</label>
                        <input type="Deskripsi" id="Deskripsi" name="Deskripsi"
                        className="w-full text-base px-4 py-6 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="flex justify-center m-10">
                        <button type="submit" className="flex justify-center bg-[#48D118] text-white py-3 px-10 rounded-[15px] tracking-wide font-[700] cursor-pointer" onClick={() => (console.log("Pencet"))}>
                        SUBMIT
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}