import Image from 'next/image'

export default function Home() {
	return (
		<div className='grid h-screen place-items-center'>
			<div className='p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700'>
				<h2 className='text-4xl font-medium text-white leading-tight mb-[1em]'>
					Result RDS
					<span className='inline-block whitespace-nowrap rounded-[0.27rem] bg-white ml-[0.65em] px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-gray-900'>
						GP
					</span>
				</h2>

				<div className='mt-[1em]'>
					<div className='inline-block max-w-sm mr-[1em] border rounded-lg shadow bg-gray-800 border-gray-700'>
						<a href='#'>
							<Image
								className='rounded-t-lg'
								src='/1.jpg'
								alt=''
								width='500'
								height='300'
							/>
						</a>
						<div className='p-5'>
							<a href='#'>
								<h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
									Pavel Otdelnov
								</h5>
							</a>
							<p className='mb-3 font-normal text-gray-400'>
								Best of the best Freestyler of Russia
							</p>
							<a
								href='#'
								className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:focus:ring-blue-900'
							>
								Read more
							</a>
						</div>
					</div>

					<div className='inline-block max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700'>
						<a href='#'>
							<Image
								className='rounded-t-lg'
								src='/2.jpg'
								alt=''
								width='500'
								height='300'
							/>
						</a>
						<div className='p-5'>
							<a href='#'>
								<h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
									Roman Trehlebovich
								</h5>
							</a>
							<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
								Best drift FPV pilot of the world
							</p>
							<a
								href='#'
								className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:focus:ring-blue-900'
							>
								Read more
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
