const PageFive = () => {
	return (
		<div className='PageFive'>
			<div className='PageFiveCTA'>
				<h1 className='Heading PageFive__heading'>Limited Edition*<br />AVAILABLE NOW</h1>
				<button className='PageFiveCTA__button'><a href='mailto:hello@timothyshivers.com?subject=The%20wait%20is%20over.&body=Dear%20Timmy%2C%0D%0A%0D%0AYou%27re%20hired....%21%0D%0A%0D%0ASincerely%2C%0D%0AAway'>Get the Timmy Now</a></button>
			</div>
			<div className='Timmy'>
			<picture>
					<div className='PageFive__banner'>
						<div>
							<img
								srcSet='/assets/photos/4C6A2718.jpg 666w,
												/assets/photos/4C6A2718@2x.jpg 1332w,
												/assets/photos/4C6A2718@3x.jpg 1707w'
								sizes='(max-width: 420px) 50vw,
												(max-width: 1440px) 35vw,
												30vw'
								src='/assets/photos/4C6A2718@2x.jpg' alt='Timmy sitting on the floor with his bedazzled Away suitcase'
								className='PageFive__photo'
							/>
						</div>
					</div>
				</picture>

			</div>
			<div className='PageFive__contacts'>
				<p><a href='mailto:hello@timothyshivers.com'>hello@timothyshivers.com</a></p>
				<p>760-508-5156</p>
			</div>
			<aside className='PageFive__disclaimer'>*There's literally only one.</aside>

		</div>
	);
};

export default PageFive;
