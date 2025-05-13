import { Button } from '@/components/ui'
import Image from 'next/image'

const cardData = [
	{
		iconSrc: '/icon-01.svg',
		title: 'Quality control',
		description:
			'A huge work has been done with the teachers and their work has been monitored thoroughly.',
	},
	{
		iconSrc: '/icon-02.svg',
		title: 'Progress analysis',
		description:
			'The CEF of Reference has been used at our school. It allows to control our students’ success in studying.',
	},
	{
		iconSrc: '/icon-03.svg',
		title: 'Speaking clubs',
		description:
			'In our school you will practice your speaking skills and just get a lot of positive emotions!',
	},
]

const WhyChooseUs = () => {
	return (
		<div className='flex flex-col items-center justify-center px-3 lg:px-16 lg:py-52 py-24 space-y-7  '>
			<div className='text-center max-w-96 p-2'>
				<span className='text-sm text-muted-foreground/60'>
					WHY CHOOSE US
				</span>
				<h2 className='lg:text-6xl text-5xl'>Our values</h2>
			</div>

			<div className='grid lg:grid-cols-3 grid-cols-1 items-center lg:gap-32 gap-24'>
				{cardData.map((card, index) => (
					<div
						key={index}
						className='flex flex-col items-center text-center justify-between w-80 px-2.5 py-2 '
					>
						<Image
							alt={`icon ${card.title}`}
							src={card.iconSrc}
							width={80}
							height={80}
							quality={100}
						/>
						<div className='space-y-4 mt-6'>
							<h3 className='font-bold text-xl'>{card.title}</h3>
							<p className='text-muted-foreground/60 text-base'>
								{card.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export { WhyChooseUs }
