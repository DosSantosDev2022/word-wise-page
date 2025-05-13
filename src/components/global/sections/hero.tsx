import { Button } from '@/components/ui'
import Image from 'next/image'

const SectionHero = () => {
	return (
		<div className='bg-secondary rounded-b-2xl flex lg:flex-row flex-col justify-center items-center gap-8 px-6 py-8 lg:px-12 lg:py-10'>
			<div className='max-w-xl p-2 space-y-4'>
				<h1 className='text-4xl leading-10 lg:text-5xl lg:leading-12'>
					A <span className='text-primary'>unique</span> approach to
					learning foreign languages online
				</h1>
				<div className='w-80 '>
					<p className='text-lg'>
						Learn at your own pace, with lifetime access on mobile and
						desktop
					</p>
				</div>
				<Button>Get Starter</Button>
			</div>

			<div className='relative w-full h-[400px] lg:h-[690px]'>
				<Image
					alt=''
					src={'/frame-01.png'}
					fill
					quality={100}
					className='object-contain'
				/>
			</div>
		</div>
	)
}

export { SectionHero }
