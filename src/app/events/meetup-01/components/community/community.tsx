import styles from './community.module.css';
import Square from './square';
import Telegram from '@/app/icons/telegram';
import Instagram from '@/app/icons/instagram';
import Linkedin from '@/app/icons/linkedin';
import Meetup from '@/app/icons/meetup';
import X from '@/app/icons/x';
import Facebook from '@/app/icons/facebook';

const CommunitySection = () => {
	return (
		<div className={styles.community}>
			<div className={styles.container}>
				<span className={styles.communityDecorator}>TECH_SHIFT</span>
				<div className={styles.blockDecorator}></div>
				<Square className={styles.decoratorKubeTop}/>
				<Square className={styles.decoratorKubeBot}/>
				<div className={styles.content}>
					<div>
						<h3>Follow Us for Updates & Exclusive Content</h3>
					</div>
					<div className={styles.socials}>
						<a href="https://t.me/+17w5tlAcs2NjNzI0" target="_blank">
							<Telegram/>
						</a>
						<a href="https://www.instagram.com/techshift_malta/" target="_blank">
							<Instagram/>
						</a>
						<a href="https://www.linkedin.com/groups/10008642" target="_blank">
							<Linkedin/>
						</a>
						<a href="https://x.com/techshift_mt" target="_blank" className={styles.x}>
							<X/>
						</a>
						<a href="https://www.meetup.com/techshift-community-malta/" target="_blank">
							<Meetup/>
						</a>
						<a href="https://www.facebook.com/groups/techshift" target="_blank">
							<Facebook/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CommunitySection;