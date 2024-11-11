import HeroSection from '@/app/events/meetup-01/components/hero/hero';
import EventSection from '@/app/events/meetup-01/components/event/event';
import CommunitySection from '@/app/events/meetup-01/components/community/community';
import Footer from '@/app/events/meetup-01/components/footer/footer';

import styles from './styles.module.css'

export default function Meetup01() {
	return (
		<main className={styles.meetup01}>
			<HeroSection />
			<EventSection />
			<CommunitySection />
			<Footer />
		</main>
	);
}
