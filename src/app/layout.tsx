import type {Metadata} from 'next';
import './globals.css';
import {GeistSans} from 'geist/font/sans';

export const metadata: Metadata = {
	title: 'TechShift Malta | Build, Learn, and Grow Together in Tech',
	description: 'Join TechShift Community Malta to connect with tech enthusiasts, build skills, and grow together through engaging meetups and networking events across diverse technology domains.',
	keywords: [
		'TechShift Community Malta',
		'TechShift Malta',
		'Tech Community Malta',
		'Malta Tech Events',
		'Tech Networking',
		'Tech Meetups Malta',
		'Technology Enthusiasts',
		'Software Development',
		'DevOps',
		'Cybersecurity',
		'Data Science',
		'UX/UI Design',
		'IT Professionals',
		'Tech Ecosystem',
		'Tech Workshops',
		'Networking Events',
		'Connect with tech professionals in Malta',
		'Learn and grow in Malta’s tech community',
		'Networking events for IT leaders in Malta',
		'Inclusive tech ecosystem in Malta',
		'Malta technology workshops and seminars',
	],
	openGraph: {
		title: 'TechShift Malta | Build, Learn, and Grow Together in Tech',
		description: 'Join TechShift Community Malta to build, learn, and grow together through engaging meetups and networking events across diverse technology domains.',
		url: 'https://techshift.community/',
		images: 'https://techshift.community/opengraph-image.png',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TechShift Malta | Build, Learn, and Grow Together in Tech',
		description: 'Join TechShift Community Malta to build, learn, and grow together through engaging meetups and networking events across diverse technology domains.',
		images: 'https://techshift.community/twitter-image.png',
	}
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={GeistSans.className}>
		<body>
		{children}
		</body>
		</html>
	);
}
