import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Img1 from '../assest/images/drel04.png'
import Img2 from '../assest/images/shgins008.png'
import Img3 from '../assest/images/instr11.png'
import Img4 from '../assest/images/nalka.png'
import Img5 from '../assest/images/pashcus.png'
import Img6 from '../assest/images/rolar.png'
import './App.css';


const useStyles = makeStyles((theme) => ({
    floatings: {
        marginLeft: '-81px',
        animationName: 'floating',
        animationDuration: '7s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        position: 'absolute',
        top: '100px',
    },
    floating: {
        marginLeft: '-81px',
        animationName: 'floating',
        animationDuration: '7s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        position: 'absolute',
        top: '430px',
    },
    tossing: {
        [theme.breakpoints.down('lg')]: {
            marginTop: '100px'
        },
        animationName: 'tossing',
        WebkitAnimationName: 'tossing',
        height: '100px',
        marginTop: '40px',
        WebkitAnimationDuration: '1.8s',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate-reverse',
        WebkitAnimationDirection: 'alternate-reverse',
    },
    phalash:{
        [theme.breakpoints.down('xs')]: {
            marginTop:'-68px'
        },
        animationName: 'tossing',
        WebkitAnimationName: 'tossing',
        height: '100px',
        marginTop: '40px',
        WebkitAnimationDuration: '1.8s',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate-reverse',
        WebkitAnimationDirection: 'alternate-reverse',
    },
    driller: {
        [theme.breakpoints.down('xs')]: {
            marginTop: '-68px',
            marginLeft:'35px',
        },
        animationName: 'tossing',
        WebkitAnimationName: 'tossing',
        height: '100px',
        marginTop: '40px',
        WebkitAnimationDuration: '1.8s',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate-reverse',
        WebkitAnimationDirection: 'alternate-reverse',
    },
    tossings: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
        animationName: 'tossing',
        WebkitAnimationName: 'tossing',
        height: '100px',
        marginTop: '40px',
        WebkitAnimationDuration: '1.8s',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate-reverse',
        WebkitAnimationDirection: 'alternate-reverse',

    },
    round: {
        marginTop: '50px',
        borderRadius: '50%',
    },
    tap: {
        marginTop: '50px',
        borderRadius: '50%',
    },
    round1: {
        //   [theme.breakpoints.down('md')]: {
        //     //   marginLeft: '744px',
        //   },
        //   [theme.breakpoints.down('sm')]: {
        //       marginTop: '-334px',
        //       borderRadius: '50%',
        //     //   marginLeft: '244px',
        //   },
        // marginLeft: '744px',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '-400px',
        borderRadius: '50%',
        marginRight: '250px',
        position: 'relative'
    },
    round4: {
        marginTop: '-340px',
        borderRadius: '50%',
        //   marginLeft: '40px',
        position: 'relative'
    },
    //   block:{
    //       position: 'absolute',
    //       display:'inline-block',  
    //   }

    items: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },

}));
const Animation = () => {
    const classes = useStyles();
    return (
        <div className={classes.AnimationContainer}>
            <div className={classes.items}>
                <div className={classes.tap}>
                    <div className={classes.floating}>
                        <img className={classes.phalash}
                            src={Img2} alt="img1"
                        />
                    </div>
                </div>
                <div className={classes.round}>
                    <div className={classes.floating}>
                        <img style={{width:'132px'}} className={classes.tossing}
                            src={Img3} alt="img2"
                        />
                    </div>
                </div>
                <div className={classes.round}>
                    <div className={classes.floating}>
                        <img className={classes.driller}
                            src={Img1} alt="img3"
                        />
                    </div>
                </div>
            </div>
            {/*  */}
             <div className={classes.items}>
                <div className={classes.taps}>
                    <div className={classes.floatings}>
                        <img className={classes.tossings}
                            src={Img4} alt="img3"
                        />
                    </div>
                </div>
                <div className={classes.rounds}>
                    <div className={classes.floatings}>
                        <img style={{marginTop:'-20px'}} className={classes.tossings}
                            src={Img6} alt="img4"
                        />
                    </div>
                </div>
                <div className={classes.rounds}>
                    <div className={classes.floatings}>
                        <img width='200px' className={classes.tossings}
                            src={Img5} alt="img5"
                        />
                    </div>
                </div>
            </div>



            {/* <div className={classes.round}>
                <div className={classes.round1}>
                    <img className={classes.tossing}
                        src={Img4} alt="img4"
                    />
                </div>
            </div> */}
            {/* <div className={classes.round1}>
                <div className={classes.round1}>
                    <img className={classes.tossing}
                        src={Img4} alt="img4"
                    />
                </div>
            </div> */}
        </div>
    )
}

export default Animation;