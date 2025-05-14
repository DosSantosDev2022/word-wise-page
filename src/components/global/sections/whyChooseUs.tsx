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
		<section
			aria-labelledby='why-choose-us-heading'
			className='px-4 md:px-8 lg:px-16 py-16 lg:py-32 bg-background text-foreground'
		>
			<header className='text-center max-w-2xl mx-auto mb-16'>
				<span className='text-sm font-medium text-muted-foreground/60 uppercase tracking-wider'>
					Why Choose Us
				</span>
				<h2
					id='why-choose-us-heading'
					className='text-4xl lg:text-6xl mt-2'
				>
					Our Values
				</h2>
			</header>

			<div className='flex items-center justify-center flex-col lg:flex-row gap-12'>
				{cardData.map((card, index) => (
					<article
						key={index}
						className='flex flex-col items-center text-center px-6 py-4 w-full lg:w-96 '
						aria-labelledby={`card-title-${index}`}
					>
						<Image
							src={card.iconSrc}
							alt={`Icon representing ${card.title}`}
							width={80}
							height={80}
							className='mb-6'
							priority
						/>
						<h3
							id={`card-title-${index}`}
							className='text-xl font-semibold mb-3'
						>
							{card.title}
						</h3>
						<p className='text-muted-foreground text-base leading-relaxed'>
							{card.description}
						</p>
					</article>
				))}
			</div>
		</section>
	)
}

export { WhyChooseUs }
