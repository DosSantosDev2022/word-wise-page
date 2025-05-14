'use client'

import {
	Button,
	Navigation,
	NavigationItem,
	NavigationList,
} from '@/components/ui'
import Image from 'next/image'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenMenu = () => {
		setIsOpen(!isOpen)
	}

	const links = [
		{ label: 'Courses', url: '/#' },
		{ label: 'About us', url: '/#' },
		{ label: 'Teachers', url: '/#' },
		{ label: 'Pricing', url: '/#' },
		{ label: 'Carrers', url: '/#' },
		{ label: 'Blog', url: '/#' },
	]

	return (
		<header className='w-full px-4 lg:px-14 py-5  bg-secondary rounded-t-2xl'>
			<div className='flex flex-col lg:flex-row items-center justify-between'>
				{/* Logo + Toggle Mobile */}
				<div className='flex items-center justify-between w-full lg:w-auto'>
					<span className='font-bold text-3xl'>
						<span className='text-primary'>Word</span> Wise
					</span>
					<Button
						onClick={handleOpenMenu}
						sizes='icon'
						className='lg:hidden'
						aria-label='Toggle menu'
					>
						{isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
					</Button>
				</div>

				{/* Navegação */}
				<div
					className={`
						transition-all duration-300 ease-in-out
						overflow-hidden
						w-full lg:w-auto
						${isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
						lg:!max-h-none lg:!opacity-100 lg:!translate-y-0 lg:flex
						flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8
					`}
				>
					<Navigation>
						<NavigationList className='flex flex-col lg:flex-row gap-5 lg:gap-2'>
							{links.map((link) => (
								<NavigationItem key={link.label}>
									<a href={link.url}>{link.label}</a>
								</NavigationItem>
							))}
						</NavigationList>
					</Navigation>
					<div className='flex gap-2 w-full lg:w-auto'>
						<Button sizes='xs' variants='primary'>
							Get Starter
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
