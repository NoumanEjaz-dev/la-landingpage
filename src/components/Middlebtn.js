import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    Button: {
        border:'1px solid #38d1e0',
        padding:'8px 18px 8px 18px',
        color:'#38d1e0',
        "&:hover": {
           background:'#fff'

        }
    },
}));

  const  Middlebtn = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.Button} >
                Grid Button
            </Button>
        </div>
    );
}

export default Middlebtn
