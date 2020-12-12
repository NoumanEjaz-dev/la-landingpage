import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import location from '../assest/images/location.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
    field: {
        [theme.breakpoints.down('lg')]: {
            width: '100%'
        },
        display: 'flex',
        position: 'relative',
        margin: '1em auto',
        flexDirection: 'row',
        justifyContent: 'center',
        // MozBoxShadow: '0px 0px 2px 0px rgba(0,0,0,0.2)',
        // WebkitBoxShadow: '0px 0px 2px 0px rgba(0,0,0,0.2)',
        // boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.2)',
        // padding: '7px',
        // // borderRadius: '15px',
        // backgroundColor: "#fff",
        // width: '50%',
    },
    input: {
        [theme.breakpoints.down('xs')]: {
            width: '30%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '67%',
            padding:'23px 0px 23px 20px',
        },
        display: 'block',
        typecheck: 'text',
        // padding: '0.6em',
        border: 'none',
        borderLeft: 'none',
        outline: 'none',
        borderTop: 'none',
        margin: '0px',
        width: '30%',
        padding: '23px 0px 23px 20px',
    },
    Button: {

        textTransform: 'none',
        fontFamily: 'Roboto',
        fontSize: '12px',
        // padding: '0.9em 2em',
        borderRadius:'inherit',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        "&:hover": {
            backgroundColor: '#000',
        },
    },
    detail:{
        color: 'black'
    },
    location:{
        width: '5%', 
        height: '30px'
    }
}));
const InputField = () => {
    const classes = useStyles();
    return (
        <div className={classes.head}>
            <div className={classes.field} id="searchform">
                {/* <img className={classes.location} style={{}} src={location} alt="location" /> */}
                <input className={classes.input} type="text"  placeholder="Enter your address " />
                
                <Button className={classes.Button} type="button" > 
                <ArrowForwardIcon/>
                 </Button>
            </div>
        </div>
    )
}

export default InputField;