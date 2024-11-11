import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Terms and Conditions - TechShift',
	description: 'Read TechShift\'s Terms and Conditions to understand the rules and guidelines for using our tech community platform. Ensure compliance and enjoy a safe, collaborative environment.',
};

// <title>Privacy Policy - TechShift</title>
// <meta name="description"
//       content="Read TechShift's Privacy Policy to understand how we collect, use, and protect your personal information. Ensuring a safe and collaborative tech community in Malta."/>

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			{children}
		</main>
	);
}
