import { SectionHero } from '@/components/global/sections/hero'
import TeacherCards from '@/components/global/sections/teacherCards'
import { WhyChooseUs } from '@/components/global/sections/whyChooseUs'

export default function Home() {
	return (
		<>
			{/* section hero */}
			<SectionHero />
			{/* section values */}
			<WhyChooseUs />
			{/* section teachers */}
			<TeacherCards />
		</>
	)
}
