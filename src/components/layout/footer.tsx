import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
	const linkNav = [
		{
			label: 'Courses',
			url: '/#',
		},
		{
			label: 'About us',
			url: '/#',
		},
		{
			label: 'Teachers',
			url: '/#',
		},
		{
			label: 'Pricing',
			url: '/#',
		},
		{
			label: 'Carrers',
			url: '/#',
		},
		{
			label: 'Blog',
			url: '/#',
		},
	]

	const listContact = [
		{
			label: 'Email: wordwise@school.com',
		},
		{
			label: 'Phone: (11) 99999-9999',
		},
		{
			label: 'Mon - Fri: 08h às 18h',
		},
	]

	const socialLinks = [
		{
			icon: <FaFacebook />,
			url: '/#',
			label: 'Facebook',
		},
		{
			icon: <FaInstagram />,
			url: '/#',
			label: 'Instagram',
		},
		{
			icon: <FaTwitter />,
			url: '/#',
			label: 'Twitter',
		},
	]

	return (
		<footer className='text-foreground bg-secondary rounded-2xl px-4 py-8 md:px-8'>
			<div className='flex lg:flex-row flex-col  justify-around w-full lg: gap-28 p-4'>
				{/* Logo / About */}
				<div>
					{/* <Image
						width={120}
						height={120}
						alt='logo-word-wise'
						src={'/Logo.svg'}
					/> */}
					<span className='font-bold text-3xl'>
						<span className='text-primary'>Word</span> Wise
					</span>
					<p className='mt-2 text-base'>Your favorite language school.</p>
				</div>

				{/* Navegação */}
				<nav>
					<h3 className='text-lg font-bold mb-2 text-primary'>
						Navigation
					</h3>
					<ul className='space-y-1 text-sm'>
						{linkNav.map((link, index) => (
							<li
								className='hover:text-primary duration-300 transition-all'
								key={index}
							>
								<Link href={link.url}>{link.label}</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Contato */}
				<nav>
					<h3 className='text-lg font-bold mb-2 text-primary'>Contact</h3>
					<ul className='space-y-1 text-sm'>
						{listContact.map((list, index) => (
							<li key={index}>{list.label} </li>
						))}
					</ul>
				</nav>

				{/* Redes Sociais */}
				<div>
					<h3 className='text-lg font-bold mb-2 text-primary'>
						Social media
					</h3>
					<div className='flex gap-4 text-xl '>
						{socialLinks.map((link, index) => (
							<Link
								className='hover:scale-95 duration-300 transition-all text-primary'
								key={index}
								href={link.url}
								aria-label={link.label}
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='mt-8 border-t border-border pt-4 text-sm text-center text-muted-foreground/60'>
				© {new Date().getFullYear()} Word Wise. All rights reserved.
			</div>
		</footer>
	)
}

export default Footer
