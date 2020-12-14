import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Img1 from '../assest/sliderImage/img1.svg'
import Img2 from '../assest/sliderImage/img2.svg'
import Img3 from '../assest/sliderImage/img3.svg'
import Img4 from '../assest/sliderImage/img4.svg'
import Img5 from '../assest/sliderImage/img5.svg'
// import Img6 from '../assest/images/rolar.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  slider: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    marginTop: '250px'
  },
  h2: {
    textAlign: 'center',
    margin:'38px',
    
  },
  sliderBox: {
    overflowX:'none ',
  },
  serviceSlider: {
    display: 'flex',
    justifyContent: 'center',
  },
  Img1: {
    backgroundColor: '#fef3ed',
    backgroundImage: `url(${Img1})`,
    position: 'relative',
    
    
    height: '175px',
    borderRadius: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '100% 100%',
    margin: '18px',
    
  },
  Img2: {
    backgroundColor: '#fef3ed',
    backgroundImage: `url(${Img2})`,
    position: 'relative',
    
    
    height: '175px',
    borderRadius: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '100% 100%',
    margin: '18px',
  },
  Img3: {
    backgroundColor: '#fef3ed',
    backgroundImage: `url(${Img3})`,
    position: 'relative',
    
    
    height: '175px',
    borderRadius: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '100% 100%',
    margin: '18px',
  },
  Img4: {
    backgroundColor: '#fef3ed',
    backgroundImage: `url(${Img4})`,
    position: 'relative',
    
    
    height: '175px',
    borderRadius: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '100% 100%',
    margin: '18px',
  },
  Img5: {
    backgroundColor: '#fef3ed',
    backgroundImage: `url(${Img5})`,
    position: 'relative',
    
    
    height: '175px',
    borderRadius: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '100% 100%',
    margin: '18px',
  },
  TextDiv: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: '32px',
    maxWidth: '170px'

  },
  title: {
    letterSpacing: '0.2px',
    display: 'inline-block',
    marginBottom: '4px',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400px',
    fontfamily: 'latobold, sans-serif',
  },
  price: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  leftChevron:{
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    // background:'#fff',
    // marginLeft:'80px',
    // padding:'8px 12px 8px 10px',
    // borderRadius:'20px',
    // outline: 'none',
    // "&:hover": {
    //   border: '1px solid black'
    // },

    position: 'absolute',
    marginLeft:'10px',
    borderRadius: '20px',
    height: '40px',
    width: '42px',
    cursor: 'pointer',
    textIndex: '-9999px',
    border: 0,
    outline: 0,
    background: 'linear-gradient(-90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5) 34.81%,hsla(0,0%,100%,.75) 60.77%,hsla(0,0%,100%,.9) 83.43%,#fff)',
    "&:hover": {
      background: 'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5) 34.81%,hsla(0,0%,100%,.75) 60.77%,hsla(0,0%,100%,.9) 83.43%,#fff)',
      border: '3px solid #FFEB3B'
    },
  },
   rightChevron: {
     [theme.breakpoints.down('sm')]: {
       display: 'none',
     },
    // background: '#fff',
    // marginRight: '80px',
    // padding: '8px 12px 8px 10px',
    // borderRadius: '20px',
    // outline:'none',
    position:'absolute',
    marginRight:'22px',
    borderRadius:'20px',
    height:'40px',
    width:'42px',
    cursor:'pointer',
    textIndex:'-9999px',
    border:0,
    outline:'0',
     background:'linear-gradient(-90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5) 34.81%,hsla(0,0%,100%,.75) 60.77%,hsla(0,0%,100%,.9) 83.43%,#fff)',
    "&:hover":{
      background:'linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.5) 34.81%,hsla(0,0%,100%,.75) 60.77%,hsla(0,0%,100%,.9) 83.43%,#fff)',
      border:'3px solid #FFEB3B'
    },
  },
  arrowStyle:{
    width:'100%',
    "&:hover":{
      color: '#FFEB3B !important',
    }
  },


  ItemSlider:{
    display:'grid'
  },
}));


const ImgSlider = () => {
  const classes = useStyles()


  const [activeItemIndex, setActiveItemIndex] = useState(0);
  console.log( activeItemIndex,"ddedd")
  const chevronWidth = 40;
  return (

    <div className={classes.slideContainer}>

      <h2 className={classes.h2}>Image Item slider</h2>

      <div className={classes.sliderBox} style={{  }}>
        <ItemsCarousel
          className={classes.ItemSlider}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          infiniteLoop={true}
          slidesToScroll={2}
          gutter={20}
          leftChevron={<button className={classes.leftChevron}>
          { <ArrowBackIcon className={classes.arrowStyle} /> }
          </button>}
          rightChevron={<button className={classes.rightChevron}>   
          {<ArrowForwardIcon className={classes.arrowStyle}  />}
          </button>}
          // outsideChevron
          chevronWidth={chevronWidth}
        >
    
          <div className={classes.Img2}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>
                    
                </div>
            </div>
          <div className={classes.Img3}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>
                    
                </div>
            </div>
          <div className={classes.Img4}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>
                    
                </div>
            </div>
          <div className={classes.Img5}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>
                    
                </div>
            </div>
         <div className={classes.Img4}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>
                    
                </div>
            </div>
          <div className={classes.Img1}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>
                    
                </div>
            </div>
          <div className={classes.Img2}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>
                    
                </div>
            </div>
             <div className={classes.Img3}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>                 
                </div>
            </div>
               <div className={classes.Img2}>
                <div className={classes.TextDiv}>
                    <strong className={classes.title}>
                        Курьерские услуги
                    </strong>
                    <span className={classes.price}>от 500 
                    <span>₽</span>
                    </span>                 
                </div>
            </div>
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default ImgSlider