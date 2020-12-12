import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Img1 from '../assest/sliderImage/img1.svg'
import Img2 from '../assest/sliderImage/img2.svg'
import Img3 from '../assest/sliderImage/img3.svg'
import Img4 from '../assest/sliderImage/img4.svg'
// import Img5 from '../assest/sliderImage/img5.svg'

const useStyles = makeStyles((theme) => ({
    serviceSlider:{
        display:'flex',
        justifyContent:'center',
    },
    Img1:{
        backgroundColor:'#fef3ed',
        backgroundImage: `url(${Img1})`,
        position:'relative',
        maxWidth:'356px',
        minWidth:'356px',
        height:'160px',
        borderRadius:'16px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundPosition:'100% 100%',
        margin:'18px',
    },
    Img2: {
        backgroundColor: '#fef3ed',
        backgroundImage: `url(${Img2})`,
        position: 'relative',
        maxWidth: '356px',
        minWidth: '356px',
        height: '160px',
        borderRadius:'16px',
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
        borderRadius:'16px',
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
        borderRadius:'16px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: '100% 100%',
        margin: '18px',
    },
    // Img5: {
    //     backgroundColor: '#fef3ed',
    //     backgroundImage: `url(${Img1})`,
    //     position: 'relative',
    //     maxWidth: '356px',
    //     minWidth: '356px',
    //     height: '160px',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'contain',
    //     backgroundPosition: '100% 100%',
    // },
    TextDiv:{
        display:'flex',
        flexFlow:'column',
        height:'100%',
        justifyContent:'center',
        paddingLeft:'32px',
        maxWidth:'170px'

    }, 
    title:{
        letterSpacing:'0.2px',
        display:'inline-block',
        marginBottom:'4px',
        fontSize:'16px',
        lineHeight:'24px',
        fontWeight:'400px',
        fontfamily:'latobold, sans-serif',
    },
    price:{
        fontSize:'16px',
        lineHeight:'24px',
    },
    // button:{
    //     Zindex:'2',
    //     postion:"absolute",
    //     top:'0',
    //     bottom:'0px',
    //     width:'80px',
    //     cursor:"pointer",
    //     textIndent:'-9999px',
    //     border:'0',
    //     outline:'0px',
    //     background: "linear-gradient(-90deg, hsla(0,0%, 100% 0) hsla(0,0%,100%,.5) 34.81%, hsla(0,0%, 100%,.75) 60.77%, hsla(0,0% 100%,.9) 83.43%,  #fff)"
    // }

}));

const Middlebtn = () => {
    const classes = useStyles();

    return (
        <div className={classes.Slider}>
         <div className={classes.serviceSlider}>
         {/* <button type="button" role="none"  className={classes.button}>
             hello
         </button> */}
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
         </div>
        </div>
    );
}

export default Middlebtn
