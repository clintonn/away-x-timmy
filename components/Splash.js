import { Component } from 'preact';
import fscreen from 'fscreen';

export default class SplashVideo extends Component {
	constructor() {
		super();
		this.state = {
			muted: true,
			mobile: window.innerWidth <= 420,
			controlIcon: window.innerWidth <= 420 ? 'fa-arrows-alt' : 'fa-volume-off'
		};
		this.toggleSplash = this.toggleSplash.bind(this);
		this.reset = this.reset.bind(this);
		this.toggleAudioIcon = this.toggleAudioIcon.bind(this);
	}

	componentDidMount() {
		this.resize = window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		window.removeEventListener(this.resize);
	}

	onResize = () => {
		if (this.state.mobile && window.innerWidth > 420) {
			this.setState({ ...this.state, mobile: false, controlIcon: 'fa-volume-off' });
		} else if (!this.state.mobile && window.innerWidth <= 420) {
			this.setState({ ...this.state, mobile: true, controlIcon: 'fa-arrows-alt' });
		}
	}

	toggleSplash = (event) => {
		const { mobile, muted } = this.state;
		if (mobile) {
			if (muted) {
				if (this.splashVid.webkitEnterFullscreen) {
					this.splashVid.webkitEnterFullscreen();
					this.splashVid.play();
				} else {
					fscreen.requestFullscreen(this.splashVid);
				}
			}
		} else if (muted) {
			this.props.hideLogo();
		} else {
			this.props.showLogo();
		}
		this.toggleAudioIcon();
	}

	toggleAudioIcon = () => {
		let controlIcon;
		if (!this.state.mobile) {
			if (this.state.muted) {
				controlIcon = 'fa-volume-up SplashVideo__control--faded';
			} else {
				controlIcon = 'fa-volume-off';
			}
		} else if (this.state.muted) {
			controlIcon = 'fa-chevron-left SplashVideo__control--faded';
		} else {
			controlIcon = 'fa-arrows-alt';
		}

		this.setState({ ...this.state, muted: !this.state.muted, controlIcon });
	}

	reset = () => {
		this.setState({ ...this.state, muted: true, controlIcon: window.innerWidth <= 420 ? 'fa-arrows-alt' : 'fa-volume-off' });
		this.props.showLogo();
		if (this.state.mobile) {
			if (this.splashVid.webkitExitFullscreen) {
				this.splashVid.webkitExitFullscreen();
			} else {
				fscreen.exitFullscreen(this.splashVid);
			}
		}
		this.splashVid.play();
	};


	render() {
		const { muted, controlIcon, mobile } = this.state;
		return (
			<div className='Splash'>
				<video
					ref={(vid) => { this.splashVid = vid; }}
					className={`SplashVideo${muted ? ' SplashVideo--muted' : ''}`}
					playsInline
					poster='/assets/photos/4C6A2832@2x.jpg'
					onClick={this.toggleAudio}
					onEnded={this.reset}
					autoplay
					muted={muted}
					volume={0.75}
				>
					{
						mobile && <source src='http://www.timothyshivers.com/away/away-x-timmy-trailer_360.webm' type='video/webm' />
					}
					<source src='http://www.timothyshivers.com/away/away-x-timmy-trailer.webm' type='video/webm' />
					{
						mobile && <source src='http://www.timothyshivers.com/away/away-x-timmy-trailer_360.mp4' type='video/mp4' />
					}
					<source src='http://timothyshivers.com/away/away-x-timmy-trailer.mp4' type='video/mp4' />
					<img src='/assets/photos/4C6A2834@2x.jpg' alt='Away x T!MMY Splash' />
				</video>
				<i className={`fa fa-${mobile ? 'lg' : '2x'} ${controlIcon} SplashVideo__control SplashVideo__control--center`} onClick={this.toggleSplash}></i>
			</div>
		);
	}
}