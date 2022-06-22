import Link from 'next/link'

const Sidebar = ({data, active}) => {
	// console.log(data)
	
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
				<button className="p-[10px] bg-[#FE2F2F] w-full text-white rounded-[8px]">Keluar</button>
			</div>
			
		</div>
	)
}

export default Sidebar;