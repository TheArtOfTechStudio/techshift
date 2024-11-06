import styles from './page.module.css';
import InfinityIcon from '@/app/infinity';
import Telegram from '@/app/icons/telegram';
import Instagram from '@/app/icons/instagram';
import Linkedin from '@/app/icons/linkedin';
import X from '@/app/icons/x';
import Facebook from '@/app/icons/facebook';

export default function Home() {
	return (
		<main className={styles.hero}>
			<div className={styles.header}>
				<a href="">TECHSHIFT.COMMUNITY</a>
			</div>
			<InfinityIcon className={styles.decorator}></InfinityIcon>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Launching soon</h1>
					<p className={styles.p1}>
						We are thrilled to announce that Malta TechSift Community is launching soon. A new space for
						innovators, tech enthusiasts, and collaborators is on its way.
					</p>
					<p>
						Stay tuned as we put the final touches on our community hub. We can&#39;t wait to have you join us
						in shaping the future of technology!
					</p>
				</div>
				<div className={styles.social}>
					<h2>Social</h2>
					<div>
						<a href="https://t.me/+17w5tlAcs2NjNzI0" target="_blank">
							<Telegram/>
						</a>
						<a href="https://www.instagram.com/techshift_malta/" target="_blank">
							<Instagram/>
						</a>
						<a href="https://www.linkedin.com/groups/10008642" target="_blank">
							<Linkedin/>
						</a>
						<a href="https://x.com/techshift_mt" className={styles.x}>
							<X/>
						</a>
						<a href="https://www.facebook.com/groups/techshift" target="_blank">
							<Facebook/>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
