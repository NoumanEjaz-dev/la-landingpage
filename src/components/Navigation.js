import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/ Button';
// import bgImg from '../assest/images/example.png'
import InputField from '../components/InputField';
import Heading from '../components/Heading';
import Animation from '../components/Animation';
// import ImageSlider from '../components/ImageSlider';

const useStyles = makeStyles ((theme)=>({
   main:{
    //    backgroundImage: `url(${bgImg})`,
       display:'flex',
       justifyContent:'space-between',
    //    height:'635px',
    //    padding:'0px 15px',
       paddingTop:'20px',
        position: 'relative',
        bottom: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
   }, 
   p:{
       marginTop:'25px',
       fontSize:21,
       paddingLeft:'14px',
   },
   navButton:{
       paddingRight:'10px',
   },
   btn2:{
       [theme.breakpoints.down('sm')]: {
           display:'none',
       },
   }, search:{
       [theme.breakpoints.down('sm')]: {
            marginTop:'80px'
       },
       marginTop:'200px'
   },
   btn1:{
       [theme.breakpoints.down('xs')]: {
           margin:'0px 0px 0px -38px',
           paddingRight:'10px',
       },
   },
   number:{
       [theme.breakpoints.down('sm')]: {
           display:'none',
       },
       position:'absolute',
       border:'1px solid black',
       padding:'0px 5px 0px 3px',
       borderRadius:'2px',
       marginTop:'-9px',
       color:'#fff',
       background:'black',
       zIndex:'1',
       marginLeft:'50px',
   }
}));



const Navigation  = () => {
    const classes = useStyles()

    return(
        <div className={classes.container} >
            <div className={classes.main}>
                <p className={classes.p} >LibérameApp</p>
                <ul className={classes.navButton}>
                    <span className={classes.number}>4</span>
                    <span className={classes.btn1}> <Button value="Trojon" /></span>
                    
                    <span className={classes.number}>3</span>
                    <span className={classes.btn2}> <Button value="Inbox" /></span>
                    <Button value="button3" backgroundColor="black"  color="yellow" />
                </ul>
            </div>
            <div className={classes.search}>
                <Heading/>
                <InputField/>
                <Animation/>
            </div>
        </div>
    )

}

export default Navigation 