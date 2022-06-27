import axios from "axios"
import Link from "next/link"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

export default function BuatFormTugas({title,id}){
    const [Title,setTitle] = useState("")
    const [Deskripsi,setDeskripsi] = useState("")
    const [link,setLink] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
            .then((result) => {
            axios.post('http://127.0.0.1:8000/api/exam/'+id,
            {
                title:Title,
                description:Deskripsi,
                link_embed_form:link,
            },
            {
                headers : {
                'Authorization' : `Bearer ${Cookies.get('token')}`
                }
            }).then((res) => {
                console.log(res)
                setMessage("Tugas Berhasil dibuat")
            }).catch((err) => {
                console.log(err)
                setMessage("Kesalahan dalam membuat tugas")
            })
            })
    }
    return(
        <div>
            <div className='flex w-[877px] h-[245px] border-2 border-black items-center justify-center bg-[#C4C4C4] rounded-[8px] shadow-lg text-[100px] text-[white]'>
            KELAS {title}
            </div>
            <div className='flex w-[877px] h-[582px] border-2 border-black items-center bg-[#ffffff] rounded-[8px] mt-[30px] shadow-lg'>
                <div className='flex w-[242px] h-[496px] bg-[#F2F2F2] ml-[30px] items-center justify-center rounded-[8px] shadow-lg'>
                    <Link href="https://docs.google.com/forms/u/0/" passHref={true}>
                        <a target="_blank">
                            <button type="submit" className="flex justify-center bg-[#777777] text-white py-2 px-10 rounded-[8px] tracking-wide font-[700] cursor-pointer" onClick={() => (console.log("Pencet"))}>
                            Buat Link Embed
                            </button>
                        </a>
                    </Link>
                </div>
                <div className='w-[530px] h-[496px] bg-[#F2F2F2] ml-[30px] items-center justify-center rounded-[8px] shadow-lg p-10'>
                    <h1 className="text-left text-[36px] font-[700] leading-[54px]">Buat Form Tugas</h1>
                    <form>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Judul Tugas</label>
                        <input type="judul" id="judul" name="judul" onChange={(e) => {setTitle(e.target.value)}}
                        className="w-full text-base px-4 py-4 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Link Embed Form</label>
                        <input type="Link" id="Link" name="Link" onChange={(e) => {setLink(e.target.value)}}
                        className="w-full text-base px-4 py-4 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <label className="text-[18px] font-[400] leading-[27px]">Deskripsi Tugas</label>
                        <input type="Deskripsi" id="Deskripsi" name="Deskripsi" onChange={(e) => {setDeskripsi(e.target.value)}}
                        className="w-full text-base px-4 py-6 border border-gray-600 rounded-[15px] focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="flex justify-center m-10">
                        <button onClick={(e) => {handleSubmit(e)}} type="submit" className="flex justify-center bg-[#48D118] text-white py-3 px-10 rounded-[15px] tracking-wide font-[700] cursor-pointer">
                        SUBMIT
                        </button>
                    </div>
                    <div className="flex justify-center m-10">
                        <p>{message}</p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}