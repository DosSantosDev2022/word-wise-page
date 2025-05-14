import {
	AccordionAnswer,
	AccordionContainer,
	AccordionContent,
	AccordionQuestion,
	AccordionTrigger,
} from '@/components/ui'

const FAQ = () => {
	const faqs = [
		{
			id: '001',
			question: 'Which languages are offered at your school?',
			answer:
				'We offer courses in English, Spanish, French, German, Italian, Mandarin, and Japanese.',
		},
		{
			id: '002',
			question: 'What teaching methodology do you use?',
			answer:
				'We follow a communicative approach that emphasizes speaking from day one, combined with interactive activities and cultural immersion.',
		},
		{
			id: '003',
			question: 'How can I enroll in a course?',
			answer:
				'You can enroll directly through our website or by visiting our campus. Contact our support team for detailed assistance.',
		},
		{
			id: '004',
			question: 'Do you have classes for beginners and advanced learners?',
			answer:
				'Yes, we offer classes for all levels, from beginner to advanced. You’ll take a placement test to determine the most suitable level.',
		},
		{
			id: '005',
			question: 'How long does each course last?',
			answer:
				'Course durations vary depending on the language and level. We offer flexible programs to fit your schedule and learning pace.',
		},
		{
			id: '006',
			question: 'Do you provide a certificate after completing a course?',
			answer:
				'Yes, we provide internationally recognized certificates upon successful completion of each course.',
		},
		{
			id: '007',
			question: 'Are private lessons available?',
			answer:
				'Yes, we offer personalized one-on-one lessons tailored to your individual learning goals.',
		},
		{
			id: '008',
			question: 'Who are the instructors at your school?',
			answer:
				'Our instructors are either native speakers or fluent professionals with qualifications and experience in language teaching.',
		},
	]

	return (
		<div className='flex flex-col items-center justify-center px-3 lg:px-16 lg:py-52 py-24 gap-18 '>
			<div className='text-center p-2'>
				<span className='text-sm text-muted-foreground/60'>MORE INFO</span>
				<h6 className='lg:text-6xl text-5xl'>Common questions</h6>
			</div>

			<div className='grid lg:grid-cols-2 grid-cols-1 p-6 max-w-6xl gap-2'>
				{faqs.map((faq, index) => (
					<AccordionContainer key={index}>
						<AccordionTrigger>
							<AccordionQuestion>{faq.question}</AccordionQuestion>
						</AccordionTrigger>
						<AccordionContent>
							<AccordionAnswer>{faq.answer}</AccordionAnswer>
						</AccordionContent>
					</AccordionContainer>
				))}
			</div>
		</div>
	)
}

export { FAQ }
