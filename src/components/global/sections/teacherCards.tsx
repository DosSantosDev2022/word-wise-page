import Image from 'next/image'

const teacherCards = [
	{
		key: 1,
		title: 'Meet our teacher',
		name: 'Christian Howard',
		role: 'Italian teacher',
		imageSrc: '/frame-05.png',
		iconSrc: '/italy.png',
	},
	{
		key: 2,
		title: 'Meet our teacher',
		name: 'Emma Thompson',
		role: 'English teacher',
		imageSrc: '/frame-04.png',
		iconSrc: '/england.png',
	},
	{
		key: 3,
		title: 'Meet our teacher',
		name: 'Carlos García',
		role: 'Spanish teacher',
		imageSrc: '/frame-03.png',
		iconSrc: '/spain.png',
	},
]

const TeacherCards = () => (
	<div className='flex flex-col gap-12 lg:px-28'>
		<div className='flex flex-col gap-2 text-start items-start ml-6 lg:ml-20'>
			<span className='text-base text-muted-foreground/60'>
				KEY PERSONS
			</span>
			<h6 className='text-5xl'>Meet our teachers</h6>
		</div>

		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full p-4'>
			{teacherCards.map((teacher) => (
				<div
					key={teacher.key}
					className='flex flex-col w-full max-w-sm justify-between gap-8 border border-border shadow p-4 rounded-xl'
				>
					<div className='flex flex-col w-full lg:w-80 justify-between gap-8 border border-border shadow p-2'>
						<Image
							className='rounded-3xl'
							alt='teacher image'
							src={teacher.imageSrc}
							width={300}
							height={300}
							quality={100}
						/>
						<div className='p-1'>
							<h6 className='text-lg font-bold'>{teacher.name}</h6>
							<div className='flex items-center gap-1'>
								<Image
									alt='teacher icon'
									src={teacher.iconSrc}
									width={36}
									height={36}
								/>
								<span className='text-muted-foreground/60'>
									{teacher.role}
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
)

export default TeacherCards
