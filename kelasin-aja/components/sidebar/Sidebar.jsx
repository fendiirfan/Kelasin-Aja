

const Sidebar = ({data}) => {
	console.log(data)
	
	return(
		<div className="pt-[30px] px-[30px] w-[250px] bg-white h-[84vh]">
			<p>Pages</p>
			<div>
				<ul>
					{data.map((data, dataIdx) => {
						return( (dataIdx === 0) ?  
							<li key={dataIdx} className='pb-[10px]'>
								<div className="border bg-[#053742] rounded-[7px] w-[177px]">
									<p className="text-center text-[16px] p-[10px] text-white">{data}</p>
								</div>
							</li>
							:
							<li key={dataIdx} className='pb-[10px] border-b-2'>
								<div className="rounded-[7px] w-[177px]">
									<p className="text-center text-[16px] p-[10px]">{data}</p>
								</div>
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