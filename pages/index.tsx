import type { NextPage } from 'next';
import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import About from '../components/pages/Home/About';
import Hero from '../components/pages/Home/Hero';
import JoinSection from '../components/pages/Home/JoinSection';
import { reveal } from '../functions/animation';

const Home: NextPage = () => {
	// For scroll animation
	React.useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', reveal);
		}
	}, []);
	return (
		<AppLayout>
			<Hero />
			<About />
			<JoinSection />
		</AppLayout>
	);
};

export default Home;
