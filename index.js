import { Component } from 'preact';
import './styles/index.scss';
import Logo from './components/Logo';
import Splash from './components/Splash';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			showLogo: true,
			past100vh: false
		};
	}

	componentDidMount() {
		const el = document.createElement('link');
		el.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
		el.rel = 'stylesheet';
		document.head.appendChild(el);
		this.onscroll = document.addEventListener('scroll', () => {
			if (window.scrollY > (window.innerHeight * .85)) {
				this.setState({ ...this.state, past100vh: true });
			} else if (window.scrollY < window.innerHeight) {
				this.setState({ ...this.state, past100vh: false });
			}
		});
	}

	showLogo = () => {
		this.setState({ ...this.state, showLogo: true });
	}

	hideLogo = () => {
		this.setState({ ...this.state, showLogo: false });
	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<div className='Main'>
				<Logo show={this.state.showLogo} blue={this.state.past100vh} />
				<Splash showLogo={this.showLogo} hideLogo={this.hideLogo} />
				<PageOne />
				<PageTwo />
				<PageThree />
			</div>
		);
	}
}
