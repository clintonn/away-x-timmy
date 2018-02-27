const PageFour = () => {
	return (
		<div className='PageFour'>
			<div className='BeDaring'>
				<h1 className='Heading PageFour__heading PageFour__heading--left'>Be <span className='PageFour__heading--purple'>daring</span></h1>
				<picture>
					<div className='PageFour__banner'>
						<div>
							<img
								srcSet='/assets/photos/4C6A2803.jpg 666w,
												/assets/photos/4C6A2803@2x.jpg 1332w,
												/assets/photos/4C6A2803@3x.jpg 1707w'
								sizes='(max-width: 420px) 70vw,
												(max-width: 1440px) 35vw,
												30vw'
								src='/assets/photos/4C6A2803@2x.jpg' alt='Away ╳ T!MMY collaboration suitcase in the middle of a concrete floor'
								className='PageFour__banner--left'
							/>
						</div>
					</div>
				</picture>
			</div>
			<div className='BeDazzle'>
				<h1 className='Heading PageFour__heading PageFour__heading--right'>BE <span className='PageFour__heading--blue'>DAZZLE</span></h1>
				<picture>
					<div className='PageFour__banner--right'>
						<div>
							<img
								srcSet='/assets/photos/4C6A2783.jpg 666w,
												/assets/photos/4C6A2783@2x.jpg 1332w,
												/assets/photos/4C6A2783@3x.jpg 1707w'
								sizes='(max-width: 420px) 80vw,
												(max-width: 1440px) 35vw,
												30vw'
								src='/assets/photos/4C6A2783@2x.jpg' alt='Away ╳ T!MMY collaboration suitcase in the middle of a concrete floor'
								className='PageFour__photo--right'
							/>
						</div>
					</div>
				</picture>
			</div>
		</div>
	);
}

export default PageFour;
