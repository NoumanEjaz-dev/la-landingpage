import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import icon1 from '../assest/icons/icon1.png';
import icon2 from '../assest/icons/hamer.png';
import icon3 from '../assest/icons/icon2.png';
import icon4 from '../assest/icons/icon3.png';
import icon5 from '../assest/icons/icon3.png';
import Middlebtn from '../components/Middlebtn';

const useStyles = makeStyles((theme) => ({
  GridContainer:{
      [theme.breakpoints.down('lg')]: {
          justifyContent: 'center',
            },
      [theme.breakpoints.down('xs')]: {
          gridTemplateColumns: 'auto ',
          justifyContent: 'initial',
            },
      width:'100%',
      display:'grid',
      gridTemplateColumns:'auto auto auto auto',
      color:'black',
      gridRowGap:'25px',
    //   justifyContent:'center'
  },
  gridItem:{
      [theme.breakpoints.down('xs')]: {
          padding: '0px 0px',
          borderBottom: '1px solid #d1c3c3',
        //   width: '306px',
          paddingLeft: '16px',
          fontSize: "18px",
          paddingBottom: '20px',
      },
      padding:'20px 20px',
      fontSize:'15px',
      display:'flex',
      alignItems:'center',
  },
  detail:{
      margin:'60px',
      textAlign:'center',
  },
  btn:{
      [theme.breakpoints.down('xs')]: {
          display: 'none'
      },
      textAlign:'center',
      margin: '20px',
  },
  hr:{
      height:'5px',
      background:'#bbb7b75e',
      opacity:0.1,
  }, 
  p:{
      fontSize:'17px'
  },
  icons:{
      paddingRight:'5px',
  },
  hro:{
      [theme.breakpoints.down('lg')]: {
          display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
          display: 'block',
        marginBottom:'20px',
        opacity:'0.6',
      },
  }
}));

const Products  = () => {
    const classes = useStyles()

    return(
        <>
        <div>
            <div className={classes.detail}>
                <h1 >The Grid layout body</h1>
                <p className={classes.p}>Food, drink , groceries , and more avaliable for delivery and pickup</p>
            </div>
        </div>
        <hr className={classes.hro}></hr>
        <div className={classes.GridContainer}>
            <div className={classes.gridItem}>
           <span className={classes.icons}><img width="30px" src={icon1} alt="icon1"/></span> Lorem ipsum dolor</div>
            <div className={classes.gridItem}>
             <span className={classes.icons}><img  width="30px" src={icon2} alt="icon1"/></span>Lorem ipsum dolor sit </div>
            <div className={classes.gridItem}>
             <span className={classes.icons}><img  width="30px" src={icon3} alt="icon1"/></span>n?Lorem ipsum dolor sit </div>
            <div className={classes.gridItem}>
             <span className={classes.icons}><img width="30px" src={icon4} alt="icon1"/></span>n?Lorem ipsum dolor si</div>
            <div className={classes.gridItem}>
             <span className={classes.icons}><img width="30px" src={icon5} alt="icon1"/></span>5um dolor consectetur,  </div>
            <div className={classes.gridItem}>
             <span className={classes.icons}><img width="30px" src={icon1} alt="icon1"/></span>6um dolor sit amet </div>
            <div className={classes.gridItem}>
             <span className={classes.icons}><img width="30px" src={icon2} alt="icon1"/></span>7m dolor sit consectetur,.</div>
            <div className={classes.gridItem}>
             <span className={classes.icons}><img width="30px" src={icon3} alt="icon1"/></span>7m dolor sit consectetur,.</div>
        </div>
        <div className={classes.btn}>
           <Middlebtn/>
        </div>
            <hr className={classes.hr}/>
    </>
    )

}

export default Products