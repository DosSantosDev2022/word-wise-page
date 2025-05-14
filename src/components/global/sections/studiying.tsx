import Image from 'next/image'

const Studiying = () => {
	return (
		<div className='flex flex-col items-center justify-center px-3 lg:px-16 lg:py-52 py-24 gap-18 '>
			<div className='text-center p-2'>
				<span className='text-sm text-muted-foreground/60'>
					TOP STUDIYING
				</span>
				<h6 className='lg:text-6xl text-5xl'>Our students say</h6>
			</div>

			<div className='flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-32'>
				<Image
					alt='studiying'
					width={380}
					height={380}
					quality={100}
					src={'/frame-02.png'}
				/>

				<div className=' p-2 max-w-xl'>
					<div className='flex flex-col p-2'>
						<h6 className='font-bold text-3xl'>Martin Watson</h6>
						<div className='flex items-center gap-1'>
							<Image
								width={32}
								height={32}
								alt='spain icon'
								src={'/spain.png'}
							/>
							<span className='text-muted-foreground/60'>
								B2 course student
							</span>
						</div>
					</div>
					<div className='p-2'>
						<p className='lg:text-xl text-lg'>
							There is no way I could have made the same progress learning
							Spanish without using Lingua. The best part is now learning
							Spanish has become one of my biggest hobbies.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Studiying }
