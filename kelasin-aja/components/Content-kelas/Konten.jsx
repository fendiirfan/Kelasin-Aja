const Konten = ({data}) => {
    console.log(data)

    return(
        <div className="container rounded-lg mx-auto w-[900px] bg-[#FFF] mt-4 drop-shadow-md">
            <div class="px-8 py-4">
                <p class="text-[50px] text-black">{data.title}</p>
                <hr class="border-t-[3px] border-gray-500 rounded"/>
                <p class="text-lg">{data.desc}</p>
                <button class="rounded-md mt-10 border-2 border-black py-2 px-3">{data.button}</button>
                {/* <p class="text-[130px] text-black">{data}</p> */}
            </div>
        </div>
    )
}

export default Konten;