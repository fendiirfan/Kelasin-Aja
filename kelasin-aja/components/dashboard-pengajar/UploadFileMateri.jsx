export default function UploadF({title}){
    console.log(title)
    return(
        <div>
            <div className='flex w-[877px] h-[245px] border-2 border-black items-center justify-center bg-[#C4C4C4] rounded-[8px] shadow-lg text-[100px] text-[white] '>
                <h1>KELAS {title}</h1>
            </div>
            <div className='w-[877px] h-[496px] bg-[#F2F2F2] items-center justify-center rounded-[8px] shadow-lg p-10 mt-5'>
                <h1 className="text-left text-[36px] font-[700] leading-[54px]">UploadFileMateri</h1>
                <form>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Judul File</label>
                        <input type="judul" id="judul" name="judul"
                        className="w-full text-base px-4 py-4 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Deskripsi File</label>
                        <input type="text" id="deskripsi" name="deskripsi"
                        className="w-full text-base px-4 py-6 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Upload File</label>
                        <input type="text" id="link" name="link"
                        className="w-full text-base px-4 py-4 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
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
        
    )
}

