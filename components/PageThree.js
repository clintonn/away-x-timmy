import Slider from 'react-slick';
import { Component } from 'preact';

export default class PageThree extends Component {
	constructor(props) {
		super(props);
		const testimonials = [{ text: '“I wish I could take The Timmy with me everywhere I go! It makes me a better person. Five stars. Must buy.”', author: 'Tyler Riewer' }, { text: '“If it was possible to have more than one, I’d take two of The Timmy’s everywhere I go.”', author: 'Cubby Graham' }, { text: '“Now that The Timmy is in my life, I drip with opulence. I can’t get all this glitter out of my eye.”', author: 'Ryan Dutch' }, { text: '“The Timmy is the best thing that\’s happened to me since giving birth.”', author: 'Natalie Ebel' }];

		if (window.innerWidth <= 720) {
			const natalie = testimonials.pop();
			testimonials.unshift(natalie);
		}
		this.state = {
			currentSlide: 0,
			mobile: window.innerWidth < 720,
			testimonials,
		};
		this.checkMobile = this.checkMobile.bind(this);
	}

	componentDidMount() {
		const el1 = document.createElement('link');
		const el2 = document.createElement('link');
		el1.rel = 'stylesheet';
		el2.rel = 'stylesheet';
		el1.type = 'text/css';
		el1.charset = 'UTF-8';
		el1.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css';
		el2.type = 'text/css';
		el2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css';
		document.head.appendChild(el1);
		document.head.appendChild(el2);
		this.onresize = window.addEventListener('resize', this.checkMobile);
	}

	componentWillUnmount() {
		window.removeEventListener(this.onresize);
	}

	setNewTestimonial = (index) => { this.setState({ ...this.state, currentSlide: index });}

	checkMobile() {
		const { mobile, testimonials } = this.state;
		if (mobile && window.innerWidth > 720) {
			// no longer mobile
			const natalie = testimonials.shift();
			testimonials.push(natalie);
			this.setState({ ...this.state, mobile: false, testimonials });
		} else if (!mobile && window.innerWidth <= 720) {
			// is now mobile, pop and unshift
			const natalie = testimonials.pop();
			testimonials.unshift(natalie);
			this.setState({ ...this.state, mobile: true, testimonials });
		}
	}

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 400,
			slidesToShow: 3,
			slidesToScroll: 1,
			draggable: false,
			easing: 'ease-in-out',
			responsive: [{ breakpoint: 720, settings: { slidesToShow: 1 } }, { breakpoint: 768, settings: { slidesToShow: 3 } }],
			afterChange: this.setNewTestimonial,
		};

		const { testimonials, currentSlide } = this.state;

		return (
			<div className="PageThree">
				<div className='PageThree__slider_container'>
					<Slider {...settings}>
						<div>
							<div className='Testimonial_photo_wrapper'><img src="/assets/photos/Testimonial-Natalie.jpg" /></div>
						</div>
						<div>
							<div className='Testimonial_photo_wrapper'><img src="/assets/photos/Testimonial-Tyler.jpg" /></div>
						</div>
						<div>
							<div className='Testimonial_photo_wrapper'><img src="/assets/photos/Testimonial-Cubby.jpg" /></div>
						</div>
						<div>
							<div className='Testimonial_photo_wrapper'><img src="/assets/photos/Testimonial-Ryan.jpg" /></div>
						</div>
					</Slider>
				</div>
				<div className='PageThree__testimonial'>
					{ testimonials[currentSlide].text }<p>— { testimonials[currentSlide].author }</p>
				</div>
			</div>
		);
	}
}
