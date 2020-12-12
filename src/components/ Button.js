import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    btn: {
       margin:'3px',
       borderRadius:'15px',
       border:'1px solid black',
       textTransform:'none',
       padding:'3px 11px',
    },

});


export default function DisableElevation({ value, backgroundColor, color}) {
    const classes = useStyles()
    return (
        <Button 
            style={{ backgroundColor, color}}
        className={classes.btn}
        //  variant="contained" 
        //  color="primary"  
         disableElevation>
            {value}
        </Button>
    );
}
