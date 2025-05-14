import { ScrollAnimation } from '@/components/global/scrollAnimation'
import { FAQ } from '@/components/global/sections/faq'
import { SectionHero } from '@/components/global/sections/hero'
import { PricingSection } from '@/components/global/sections/pricingSection'
import { SendEmail } from '@/components/global/sections/sendEmail'
import { Studiying } from '@/components/global/sections/studiying'
import TeacherCards from '@/components/global/sections/teacherCards'
import { WhyChooseUs } from '@/components/global/sections/whyChooseUs'

export default function Home() {
	return (
		<>
			{/* section hero */}
			<ScrollAnimation>
				<SectionHero />
			</ScrollAnimation>

			{/* section values */}
			<ScrollAnimation>
				<WhyChooseUs />
			</ScrollAnimation>

			{/* section teachers */}
			<ScrollAnimation>
				<TeacherCards />
			</ScrollAnimation>

			{/* section students */}
			<ScrollAnimation>
				<Studiying />
			</ScrollAnimation>
			{/* section pricing */}
			<ScrollAnimation>
				<PricingSection />
			</ScrollAnimation>

			{/* section info */}
			<ScrollAnimation>
				<FAQ />
			</ScrollAnimation>

			{/* section send email */}
			<ScrollAnimation>
				<SendEmail />
			</ScrollAnimation>
		</>
	)
}
