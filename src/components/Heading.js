import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    detail:{
        [theme.breakpoints.down('lg')]: {
            display: 'block'
        },
        [theme.breakpoints.down('xs')]: {
              display:'none'
            },
            margintTop: '150px',
            position:'relative',
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
            justifyContent:'center',       
    },
    detailSmscreem:{
        [theme.breakpoints.down('lg')]: {
            display: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        margintTop: '150px',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    p:{
        [theme.breakpoints.down('xs')]: {
            width:'70%',
            lineHeight:'1.6',
            margin:'auto',
        }, 
    }
}));
const Heading = () => {
    const classes = useStyles();
    return (
            <div>
                <div className={classes.detail}>
                <div><h1 className={classes.h1}>Want beer?</h1></div>
                {/* <span className={classes.h2}><h2 >Lorem ise dora lia demo</h2></span> */}
                <p>Food, drink , groceries , and more 
                <span className={classes.para2}>avaliable for delivery and pickup</span></p>
            </div>
            <div className={classes.detailSmscreem}>
                <span className={classes.h2}><h1 >Lorem ise dora lia demo</h1></span>
                <p className={classes.p}>Food, drink , groceries , and more avaliable for delivery and pickup
                </p>
            </div>
            </div>
    )
}

export default Heading;