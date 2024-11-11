import styles from './hero.module.css'
import Link from 'next/link';
import Image from 'next/image';
import speaker from './speaker.png'
import stamp from './stamp.svg'

const HeroSection = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.banner}>
				<div className={styles.bannerContent}>
					<p className={styles.eventDateInfo}>Save the date: 27th November at 18:00</p>
					<p className={styles.intro}>Scaling Simplified:</p>
					<h1 className={styles.topic}>Managing High Traffic with Cluster Sharding</h1>
					<span className={styles.speaker}>by Jacob Falzon</span>
					<div className={styles.controls}>
						<Link
							href="https://www.meetup.com/techshift-community-malta/events/304494507"
							className={`${styles.button} ${styles.buttonPrimary}`}
							target="_blank">
							<div className={styles.buttonIcon}>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
								     viewBox="0 0 24 24" fill="none"
								     stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
								     strokeLinejoin="round"
								     className="feather feather-calendar">
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
									<line x1="16" y1="2" x2="16" y2="6"/>
									<line x1="8" y1="2" x2="8" y2="6"/>
									<line x1="3" y1="10" x2="21" y2="10"/>
								</svg>
							</div>
							<span className={styles.buttonDivider}></span>
							<span>Book a seat</span>
						</Link>
						<Link
							href={'#event'}
							className={`${styles.button} ${styles.buttonTertiary}`}>About Event</Link>
					</div>
				</div>
			</div>
			<Image
				src={speaker}
				alt="Event speaker profile photo"
				width={500}
				height={730}
				className={styles.speakerImage} />
			<Image
				src={stamp}
				alt="Round text with event information"
				width={220}
				height={220}
				className={styles.stampImage}/>
		</div>
	)
}

export default HeroSection;