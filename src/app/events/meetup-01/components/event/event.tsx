import SponsorSection from './sponsor/sponsor';
import EventInfoSection from './event-info/event-info';

import styles from './event.module.css';

const EventSection = () => {
	return (
		<div className={styles.event} id="event">
			<div className={styles.sponsor}>
				<SponsorSection/>
			</div>
			<div className={styles.info}>
				<EventInfoSection/>
			</div>
		</div>
	)
}

export default EventSection;