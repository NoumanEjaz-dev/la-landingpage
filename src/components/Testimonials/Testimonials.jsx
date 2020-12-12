import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Slider from "react-slick";
// import CONSTANTS from '../../../constants';
import TestimonialsStyle from './TestimonialsStyle';
import Img1 from '../../assest/images/pashcus.png';
import Img2 from '../../assest/images/drel04.png';
import Img3 from '../../assest/images/instr11.png';
import Img4 from '../../assest/images/nalka.png';
import Img5 from '../../assest/images/rolar.png';
import Img6 from '../../assest/images/instr69.png';

const Testimonials = () => {
	const classes =	TestimonialsStyle();
	const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      cssEase: 'linear',
			responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		  ]
    };
    
	return (
		<div className={classes.Container}>
		  <Container fixed className="ContentContainer">
		  	<div className="TestimonialsContainer">
		  	  <div className="TestimonialsGrid">
				<div className="blocks">
				 <Slider {...settings}>
					<div className="block">
						<div className="innerContent">
							<img style={{width:'100px'}} alt="img1" src ={Img1} />
						</div>
					</div>
					<div className="block">
						<div className="innerContent">
					   	<img  style={{width:'100px'}} alt="img2" src ={Img2} />
						 </div>
					</div>
					<div className="block">
						<div className="innerContent">
					   	  <img  style={{width:'100px'}} alt="img3" src ={Img3} />
						 </div>	
					</div>
					<div className="block">
						<div className="innerContent">
					   	 <img  style={{width:'100px'}} alt="img4" src ={Img4} />
						 </div>
					</div>
					<div className="block">
						<div className="innerContent">
					   	<img  style={{width:'100px'}} alt="img5" src ={Img5} />
						 </div>
					</div>
					{/* <div className="block">
						<div className="innerContent">
					   	 <img  style={{width:'100px'}} alt="imh6" src ={Img6} />
						 </div>
					</div>
					<div className="block">
						<div className="innerContent">
					   	 <img  style={{width:'100px'}} alt="img6" src ={Img1} />
						 </div>
					</div> */}
		     </Slider>
				</div>
			</div>

		  </div>
		 </Container>
		</div>
	)

};

export default Testimonials;