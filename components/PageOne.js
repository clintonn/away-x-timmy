const PageOne = (props) => {
	return (
		<div className='PageOne'>
			<div className='PageOne__wrapper'>
				<section className='PageOne__copy'>
					<aside className='PageOne__smallcaps'><span style={{ borderBottom: '2px solid black', paddingBottom: '.3em' }}>introducing</span></aside>
					<h1 className='Heading fullwidth'>Away ╳ T!MMY</h1>
					<aside className='PageOne__explanation fullwidth'>
						A collaboration for those who know what they&#39;re willing to do to get away.
					</aside>
				</section>
				<picture>
					<div className='PageOne__banner_container'>
						<div>
							<img
								srcSet='/assets/photos/4C6A2726.jpg 666w,
												/assets/photos/4C6A2726@2x.jpg 1332w,
												/assets/photos/4C6A2726@3x.jpg 1707w'
								sizes='(max-width: 420px) 90vw,
												(max-width: 1440px) 45vw,
												35vw'
								src='/assets/photos/4C6A2726@2x.jpg' alt='Away ╳ T!MMY collaboration suitcase in the middle of a concrete floor'
								className='PageOne__banner'
							/>
						</div>
					</div>
				</picture>
			</div>
		</div>
	);
}

export default PageOne;
