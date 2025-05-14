import { Button } from '@/components/ui'

const plans = [
	{
		title: 'Basic',
		price: 'R$ 199',
		description: 'Ideal for beginners starting their language journey.',
		features: [
			'2 classes per week',
			'Access to speaking club',
			'Basic learning materials',
		],
	},
	{
		title: 'Standard',
		price: 'R$ 299',
		description: 'Perfect for consistent learning with group dynamics.',
		features: [
			'3 classes per week',
			'Speaking club + weekly workshops',
			'Digital materials included',
			'Progress tracking',
		],
		isPopular: true,
	},
	{
		title: 'Premium',
		price: 'R$ 499',
		description: 'Best for fast progress and individual attention.',
		features: [
			'Unlimited classes',
			'Private tutoring sessions',
			'Premium materials & certification',
			'24/7 student support',
		],
	},
]

const PricingSection = () => {
	return (
		<section
			aria-labelledby='pricing-heading'
			className='bg-secondary py-16 px-4 md:px-8 lg:px-16'
		>
			<header className='text-center max-w-2xl mx-auto mb-16'>
				<span className='text-sm font-medium text-muted-foreground/60 uppercase tracking-wider'>
					Our Pricing
				</span>
				<h2
					id='pricing-heading'
					className='text-4xl lg:text-5xl font-bold mt-2'
				>
					Choose your plan
				</h2>
				<p className='text-muted-foreground/60 mt-4'>
					Flexible plans tailored to your learning style and goals.
				</p>
			</header>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{plans.map((plan, index) => (
					<article
						key={index}
						aria-labelledby={`plan-title-${index}`}
						className={`border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm ${
							plan.isPopular ? 'bg-muted border-border' : ''
						}`}
					>
						<h3
							id={`plan-title-${index}`}
							className='text-2xl font-semibold mb-1'
						>
							{plan.title}
						</h3>
						<p className='text-muted-foreground mb-4'>
							{plan.description}
						</p>

						<div className='text-4xl font-bold mb-6'>{plan.price}</div>

						<ul className='text-left space-y-2 mb-6'>
							{plan.features.map((feature, i) => (
								<li key={i} className='flex items-start gap-2'>
									<span className='text-green-600 text-xl'>✓</span>
									<span className='text-sm text-muted-foreground'>
										{feature}
									</span>
								</li>
							))}
						</ul>

						<Button
							variants={plan.isPopular ? 'shine' : 'primary'}
							className='w-full'
						>
							Get Started
						</Button>
					</article>
				))}
			</div>
		</section>
	)
}

export { PricingSection }
