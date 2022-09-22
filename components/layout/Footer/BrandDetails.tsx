import Image from 'next/image';
import React from 'react';
import LogoComponent from '../LogoComponent';
import LocationIcon from '../../../public/icons/location.png';
import EmailIcon from '../../../public/icons/email.png';
import CallIcon from '../../../public/icons/call.png';
import FacebookIcon from '../../../public/icons/facebook.png';
import WhatsappIcon from '../../../public/icons/whatsapp.png';
import YoutubeIcon from '../../../public/icons/youtube.png';

function BrandDetails() {
	return (
		<div className='flex flex-col items-center md:items-start'>
			<LogoComponent />
			<ul className='flex flex-col gap-4 items-center md:items-start list-none mt-8 text-offWhite text-lg'>
				<li className='flex flex-row items-center gap-3 justify flex-wrap md:flex-nowrap justify-center'>
					<Image src={LocationIcon} alt='' />
					<span>18 Shitter Avenue, Victoria Island, Lagos.</span>
				</li>
				<li className='flex flex-row items-center gap-3 flex-wrap md:flex-nowrap justify-center'>
					<Image src={CallIcon} alt='' />
					<span>+2348134567345</span>
				</li>
				<li className='flex flex-row items-center gap-3 flex-wrap md:flex-nowrap justify-center'>
					<Image src={EmailIcon} alt='' />
					<span className='break-all'>valuefemalenetwork@gmail.com</span>
				</li>
				<li className='flex flex-row items-center gap-5 mt-5'>
					<a href='#'>
						<Image src={FacebookIcon} alt='' />
					</a>
					<a href='#'>
						<Image src={WhatsappIcon} alt='' />
					</a>
					<a href='#'>
						<Image src={YoutubeIcon} alt='' />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default BrandDetails;
