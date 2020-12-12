import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Middlebtn from '../components/Middlebtn';

const useStyles = makeStyles((theme) => ({
    GridContainer: {
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'auto ',
            
        },
        width: '90%',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        color: 'black',
        gridRowGap: '25px',
        margin:'auto',
        //   padding:'10px',

    },
    Boxx: {
        width: '100%',
        backgroundColor: 'red',
        fontSize: '20px',
        borderRadius: '10',
        color: '#fff',
        padding: '10px 20px 10px 20px'

    },
    gridItem: {
      
        padding: '20px 50px',
        fontSize: '15px',
        textAlign: 'center'
    },
     detail:{
      margin:'60px',
      textAlign:'center',
  },
  hr:{
      opacity:0.1
  },
  p1:{
      background:'red',
      padding:'20px 25px 20px 25px',
      borderRadius:'10px',
      fontSize:'25px',
      marginBottom:'10px',
      color:'#fff',
  },
  p2:{
      background: 'orange',
      padding: '20px 25px 20px 25px',
      borderRadius: '10px',
      fontSize: '25px',
      marginBottom: '10px',
      color:'#fff',
  },
  p3:{
      background:'green',
      padding: '20px 25px 20px 25px',
      borderRadius: '10px',
      fontSize: '25px',
      marginBottom: '10px',
       color:'#fff',
  }, 
    h3:{
        marginTop:'40px',
    },
    btn: {
        [theme.breakpoints.down('lg')]: {
          display:'none'
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        },
        textAlign: 'center',
        margin: '20px',
    },

}));

const ProductDetails = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.btn}>
                <Middlebtn />
            </div>
            <div>
                <div className={classes.detail}>
                    <span className={classes.h2heading}><h2>ProductDetails</h2></span>
                </div>
            </div>
            
            <div className={classes.GridContainer}>
                <div className={classes.gridItem}>
                    <span className={classes.p1}>1</span>
                    <h3 className={classes.h3}>Lorem ipsum dolor</h3>
                    <p> Lorem ipsum dolor  Lorem ipsum dolor
                    Lorem ipsum dolor  Lorem ipsum dolor</p>
                </div>
                <div className={classes.gridItem}>
                    <span className={classes.p2}>2</span>
                    <h3 className={classes.h3} >Lorem ipsum dolor</h3>
                    <p> Lorem ipsum dolor  Lorem ipsum dolor
                    Lorem ipsum dolor  Lorem ipsum dolor</p>
                </div>
                <div className={classes.gridItem}>
                    <span className={classes.p3}>3</span>
                    <h3 className={classes.h3} >Lorem ipsum dolor</h3>
                    <p> Lorem ipsum dolor  Lorem ipsum dolor
                    Lorem ipsum dolor  Lorem ipsum dolor</p>
                </div>
            </div>
            <hr className={classes.hr}/>
        </>
    )


}

export default ProductDetails 