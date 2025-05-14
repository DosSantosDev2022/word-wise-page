import { Button, Input } from '@/components/ui'

const SendEmail = () => {
	return (
		<div className='flex flex-col items-center justify-center px-3 lg:px-16 lg:py-52 py-24 gap-8 lg:gap-18 '>
			<div className='flex flex-col gap-2 text-center'>
				<h6 className='lg:text-6xl text-5xl'>
					Get a free trial lesson today
				</h6>
				<span className='lg:text-lg text-base text-muted-foreground/60'>
					Start fulfilling your language dreams with our school
				</span>
			</div>

			<div className='flex flex-col lg:flex-row items-center gap-5 w-full lg:max-w-xl p-2'>
				<Input placeholder='Enter your email' />
				<Button className='rounded-3xl text-xl h-16 w-full lg:w-28'>
					Send
				</Button>
			</div>
		</div>
	)
}

export { SendEmail }
