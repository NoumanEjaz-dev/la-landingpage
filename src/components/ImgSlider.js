import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Img1 from '../assest/sliderImage/img1.svg'
import Img2 from '../assest/sliderImage/img2.svg'
import Img3 from '../assest/sliderImage/img3.svg'
import Img4 from '../assest/sliderImage/img4.svg'
import Img5 from '../assest/sliderImage/img5.svg'
import Img6 from '../assest/images/rolar.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


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
    // background:'red',
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
    maxWidth: '356px',
    minWidth: '356px',
    height: '160px',
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
    maxWidth: '356px',
    minWidth: '356px',
    height: '160px',
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
    maxWidth: '356px',
    minWidth: '356px',
    height: '160px',
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
    maxWidth: '356px',
    minWidth: '356px',
    height: '160px',
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
    maxWidth: '356px',
    minWidth: '356px',
    height: '160px',
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
    background:'#fff',
    marginLeft:'80px',
    padding:'8px 12px 8px 10px',
    borderRadius:'20px',
    outline: 'none',
    "&:hover": {
      border: '1px solid black'
    }
  },
   rightChevron: {
    background: '#fff',
    marginRight: '80px',
    padding: '8px 12px 8px 10px',
    borderRadius: '20px',
    outline:'none',
    "&:hover":{
      border:'1px solid black'
    }
  }
}));


const ImgSlider = () => {
  const classes = useStyles()


  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (

    <div className={classes.slideContainer}>

      <h2 className={classes.h2}>Image Item slider</h2>

      <div className={classes.sliderBox} style={{ padding: `0 ${chevronWidth}px`  }}>
        <ItemsCarousel
          className={classes.ItemSlider}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={4}
          gutter={20}
          leftChevron={<button className={classes.leftChevron}>{ '<'}</button>}
          rightChevron={<button className={classes.rightChevron}>{<ArrowForwardIcon/>}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >

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
        </ItemsCarousel>
      </div>
    </div>
  );
}

export default ImgSlider