import { Component } from 'preact';
import './styles/index.scss';
import Logo from './components/Logo';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', (event) => {
		});
	}

	render() {
		return (
			<div className='Main'>
			<Logo />
				<h1>Hello, World!</h1>
				<p>Lectus tincidunt nam urna etiam eros commodo dictum, lacus sociosqu duis rutrum porttitor pellentesque, lobortis ridiculus accumsan felis conubia sodales. Tortor scelerisque aliquet lectus etiam platea, varius dignissim mi gravida taciti massa, hac nisl integer maecenas.</p>
			</div>
		);
	}
}
