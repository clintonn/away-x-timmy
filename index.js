import { Component } from 'preact';
import './styles/index.scss';
import Logo from './components/Logo';
import Splash from './components/Splash';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			showLogo: true,
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', (event) => {
		});
	}

	showLogo = () => {
		this.setState({ ...this.state, showLogo: true });
	}

	hideLogo = () => {
		this.setState({ ...this.state, showLogo: false });
	}

	render() {
		return (
			<div className='Main'>
				<Logo show={this.state.showLogo} />
				<Splash showLogo={this.showLogo} hideLogo={this.hideLogo} />
			</div>
		);
	}
}
