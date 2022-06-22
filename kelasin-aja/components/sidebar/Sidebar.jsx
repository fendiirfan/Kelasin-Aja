import axios from 'axios'
import { route } from 'next/dist/server/router'
import Link from 'next/link'
import Cookies from 'js-cookie';
import { Router } from 'next/router';
import { useRouter } from 'next/router'

const Sidebar = ({data, active}) => {
	// console.log(data)
	const router = useRouter()
	const handleExit = (e) =>{
		e.preventDefault()
		axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
			.then((result)=>{
				axios.post('http://127.0.0.1:8000/api/logout', {}, 
					{
					headers : {
						'Authorization' : `Bearer ${Cookies.get('token')}`
					}
				})
				Cookies.remove('token')
				Cookies.remove('user')
				router.push('/login')
			}).catch((err)=>{
				console.log(err)
			})
	}
	
	return(
		<div className="pt-[30px] px-[30px] w-[250px] bg-white min-h-screen">
			<p className="font-bold">Pages</p>
			<div>
				<ul>
					{data.map((data, dataIdx) => {
						return( (dataIdx === active) ?  
							<li key={dataIdx} className='pb-[10px] cursor-pointer'>
								<Link href={data.link}>
								<div className="border bg-[#053742] rounded-[7px] w-[177px]">
									<p className="text-center text-[16px] p-[10px] text-white">{data.title}</p>
								</div>
								</Link>
							</li>
							:
							<li key={dataIdx} className='pb-[10px] border-b-2 cursor-pointer mb-2'>
								<Link href={data.link}>
									<div className="rounded-[7px] w-[177px]">
										<p className="text-center text-[16px] p-[10px]">{data.title}</p>
									</div>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			<div className="flex justify-center pt-[100px]">
				<button onClick={handleExit} className="p-[10px] bg-[#FE2F2F] w-full text-white rounded-[8px]">Keluar</button>
			</div>
			
		</div>
	)
}

export default Sidebar;