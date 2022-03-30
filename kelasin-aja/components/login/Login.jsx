
const Login = () => {
  return(
    <div className="grid place-items-center h-[80vh] mx-auto">
      <div className="flex flex-col w-[450px] bg-white">
        <h1 className="text-center text-[64px] font-[700] leading-[72px]">Mulai</h1>
        <h1 className="text-center text-[48px] font-[700] leading-[96px]">Pembelajaranmu</h1>
        <form>
          <div>
            <label className="text-[18px] font-[400] leading-[27px]">Email</label>
            <input type="email" id="email" name="email"
              className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="text-[18px] font-[400] leading-[27px]">Password</label>
            <input type="password" id="password" name="password" 
              className="w-full text-base px-4 py-2 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
            />
          </div>
          <div className="flex justify-center space-x-3 font-[700] text-[18px] leading-[27px] py-4">
            <div>
              <input type="radio" value="Pelajar" id="Pelajar" name="Pelajar"
                className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
              />
              <label className="m-0">Pelajar</label>
            </div>
            <div>
              <input type="radio" value="Pengajar" id="Pengajar" name="Pelajar"
                  className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
              />
              <label>Pengajar</label>
            </div>
            <div>
              <input type="radio" value="Admin" id="Admin" name="Pelajar"
                className="appearance-none rounded-full h-[28px] w-[28px] border border-black bg-white checked:bg-[#031D23] checked:border-black focus:outline-none transition duration-200 float-left mr-4 cursor-pointer"
              />
              <label>Admin</label>
            </div>
          </div>
          <button type="submit" className="w-full flex justify-center bg-black text-white p-3 rounded-[15px] tracking-wide font-[700] cursor-pointer" onClick={() => (console.log("Pencet"))}>
            Masuk
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;