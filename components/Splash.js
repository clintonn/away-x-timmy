import { Component } from 'preact';

export default class SplashVideo extends Component {
	constructor() {
		super();
		this.state = {
			playAudio: false
		};
	}

	toggleAudio = (event) => {
		event.preventDefault();
		debugger
		this.setState({ ...this.state, playAudio: !this.state.playAudio });
	}

	reset = () => this.setState({ ...this.state, playAudio: false });

	render() {
		return (
			<div className='SplashVideo'>
				<video
					playsInline
					poster='/assets/photos/4C6A2832@2x.jpg'
					onClick={this.toggleAudio}
					onEnded={this.reset}
				>
					<source src='/assets/' />
					<source src='/assets/' />
				</video>
			</div>
		);
	}
}