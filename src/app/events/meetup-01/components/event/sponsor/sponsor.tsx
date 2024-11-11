import Image from 'next/image';
import AmusnetLogo from '../Amusnet_Gaming_Primary_Logo_TranspBgr_RGB.png'
import Facebook from '@/app/icons/facebook';
import Linkedin from '@/app/icons/linkedin';
import Instagram from '@/app/icons/instagram';
import styles from './sponsor.module.css';

const SponsorSection = () => {
	return (
		<div>
			<div className={styles.sponsorContent}>
				<h2 className={styles.sponsorTitle}>Sponsored by</h2>
				<a href="https://amusnetgaming.com/" target="_blank" className={styles.sponsorLogo}>
					<Image src={AmusnetLogo} width={320} alt="Amusnet Logo"/>
				</a>
				<p className={styles.sponsorIntro}>
					Proudly hosted and sponsored by <a href="https://amusnetgaming.com/" target="_blank">Amusnet
					Gaming</a> the event will be followed by networking drinks and pizza
				</p>

				<div className={styles.socials}>
					<p className={styles.socialsText}>Follow <b>Amusnet Gaming</b> on:</p>
					<div className={styles.socialsLinks}>
						<a
							href="https://www.facebook.com/profile.php?id=61557778296792"
							target="_blank"
							className={styles.link}>
							<Facebook/>
						</a>
						<a
							href="https://www.linkedin.com/company/amusnet-gaming/mycompany/"
							target="_blank"
							className={styles.link}>
							<Linkedin/>
						</a>
						<a
							href="https://www.instagram.com/amusnetgaming/"
							target="_blank"
							className={styles.link}>
							<Instagram/>
						</a>
					</div>
				</div>
			</div>

			<div className={styles.address}>
				<p>Address:</p>
				<a
					href="https://maps.app.goo.gl/NrdMwuag92qUWnEs9"
					target="_blank">
					Quad Central Q2, Floor 6,<br/>
					Central Business District,<br/>
					Triq L-Esportaturi Birkirkara,<br/>
					CBD 1040, Malta
				</a>
			</div>
		</div>
	)
}

export default SponsorSection;