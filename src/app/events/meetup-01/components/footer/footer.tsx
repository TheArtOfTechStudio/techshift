import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerContent}>
				<a href="">TECH_SHIFT</a>
				<p>© 2023 TECH_SHIFT Community. All rights reserved.</p>
			</div>
		</div>
	)
}

export default Footer;