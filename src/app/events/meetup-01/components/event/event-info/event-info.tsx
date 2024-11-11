import TrustIcon from './trust-icon';
import styles from './event-info.module.css';

const EventInfoSection = () => {
	return (
		<div className={styles.info}>
			<div className={styles.infoWrapper}>
				<div className={styles.infoContainer}>
					<div className={styles.infoContent}>
						<span>Event</span>
						<p className={styles.eventDate}>Save the date: 27th November at 18:00</p>
						<h2 className={styles.infoTitle}>
							Simplified Scaling: Managing High Traffic with Cluster Sharding
						</h2>
						<p>
							We are delighted to announce that Amusnet Gaming will host our upcoming meetup
							on &#34;Simplified Scaling: Managing High Traffic with Cluster Sharding&#34; at its
							headquarters. Attendees will enjoy complimentary drinks and pizza, making it a perfect
							opportunity to learn and network in a welcoming environment.
						</p>
						<p>
							In the world of distributed systems, managing concurrency and ensuring efficient
							distribution
							of load across horizontally scaled architectures poses significant challenges.
							Traditional approaches relying on shared memory and locking mechanisms, which introduce
							complexities that often lead to bottlenecks, race conditions, and hard-to-debug issues.
							These approaches struggle to deliver the scalability, resilience, and performance demanded
							by modern, high-traffic applications.

						</p>
						<p>

							This session will explore cluster sharding as an elegant solution to these challenges,
							with a special focus on Apache Pekko Cluster Sharding. By isolating entities, eliminating
							the need for shared state, and distributing workload across nodes in a cluster dynamically,
							sharding allows developers to manage high-volume systems with reduced complexity and greater
							fault tolerance.
						</p>
					</div>
					<div className={styles.agenda}>
						<h4>Agenda:</h4>
						<ul>
							<li>
								<b>18:00 – 18:30:</b>Arrival and Networking
							</li>
							<li>
								<b>18:30 – 19:10:</b>Featured Talk: <i>Scaling Simplified: Managing High Traffic with</i>
								Cluster Sharding
							</li>
							<li>
								<b>19:10 – 19:20:</b>Q&A Session
							</li>
							<li>
								<b>19:20 – 20:00:</b>Networking, Drinks & Pizza
							</li>
						</ul>
					</div>
				</div>
			</div>
			<TrustIcon className={styles.infoIcon}/>
		</div>
	)
}

export default EventInfoSection;