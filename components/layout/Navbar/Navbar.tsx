import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/brand/logo.png';
import MenuIcon from '../../../public/icons/menu.png';
import MenuComponent from '../../reusable/MenuComponent/MenuComponent';

function Navbar() {
	return (
		<nav className='pl-[3vw] pr-[3vw] pt-6 pb-5 shadow-sm'>
			<div className='flex flex-row flex-wrap items-center'>
				<div className='mr-auto'>
					<Link href='/'>
						<div className='flex flex-row items-center gap-2 cursor-pointer'>
							<Image src={Logo} alt='Logo' width={50} height={50} />
							<span className='max-w-[151px] font-bold uppercase text-secondary'>
								Value female Network
							</span>
						</div>
					</Link>
				</div>

				<div className='flex-row items-center gap-10 hidden md:flex'>
					<Link href='/#about'>
						<span className='font-bold hover:text-success cursor-pointer'>About Us</span>
					</Link>
					<Link href='/#events'>
						<span className='font-bold hover:text-success cursor-pointer'>Event and News </span>
					</Link>
					<Link href='/#join-us'>
						<button className='primaryButton'>Join Us</button>
					</Link>
				</div>
				<div className='md:hidden relative cursor-pointer'>
					<MenuComponent
						button={
							<div className='menu'>
								<Image src={MenuIcon} alt='Menu' height={40} objectFit='contain' />
							</div>
						}
						links={[
							{
								label: 'About Us',
								href: '/#about',
							},
							{
								label: 'Event and News',
								href: '/#events',
							},
							{
								label: 'Join Us',
								href: '/#join-us',
							},
						]}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
