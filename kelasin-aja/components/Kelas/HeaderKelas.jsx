const HeaderKelas = ({data}) => {
  // console.log(data)

  return(
      <div className="container rounded-lg mx-auto w-[900px] h-[260px] bg-[#893333] mt-10 text-center py-8 drop-shadow-md">
          <p class="align-middle text-[130px] text-white">{data}</p>
      </div>
  )
}

export default HeaderKelas;