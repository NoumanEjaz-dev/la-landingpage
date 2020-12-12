import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Img from '../assest/images/country.png';

const useStyles = makeStyles((theme) => ({
        Footer:{
            background: 'black',
            color:    '#616161',
            fontSize: '12px',
            padding:  '35px 0px'
        },
        FooterItems:{
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: ' repeat(2, 1fr)',
            },
            maxWidth:'1100px',
            margin:'0 auto',
            // padding:'0 20px',
            display:'grid',
            gridTemplateColumns:' repeat(5, 1fr)',
            gridGap:'10px',
            alignItems:'flex-start',
            justifyContent:'center',
            color:'white'
        },
        li:{
            color:'gray',
            padding: '5px',
            fontSize:'14px',
           
        },
        h1:{
            fontFamily:'serif',
            fontWeight:100,
            marginTop:'6px',
        }, 
        country:{
            width:'50px',
            margin:'-5px',
            marginLeft:'3px',
        },
        CountryBar:{
            background:'#009688',
            padding:'19px 5px 19px 5px',
        },
        h2:{
        margin:'0px',
        textAlign:"center",
        color:'#fff',
        },
        a:{
            listStyle:'none',
            color: 'gray',
            textDecoration: 'none',
            "&:hover":{
                color:'white'
            }
        },
}));


const Home = () => {
    const classes = useStyles()
    return (
        <>  
            <div className={classes.CountryBar}>
                <h2 className={classes.h2}>Atendemos todas las comunas de <span>
                <img className={classes.country} src={Img} alt="country"/>
                </span></h2>
            </div>
            <div className={classes.Footer}>
                <div className={classes.FooterItems}>
                    <ul style={{listStyle:'none'}}>
                        <li><h1 className={classes.h1} >LibérameApp</h1></li>
                    </ul>
                    <ul style={{listStyle:'none'}}>
                        <li><h4>MERCHANTS</h4></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">About</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Careers</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Careers</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Press & Media </a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Developers</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">API Docs</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Civic Labs</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">UnLimited</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Gift Cards</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Pickup</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Postmates Party</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Postmates for work</a></li>
                    </ul>
                    <ul style={{ listStyle: 'none' }}>
                        <li><h4>MERCHANTS</h4></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Sell on Postmates</a></li>
                        <li className={classes.li}>
                        Resturents</li>
                        <li><h4>FLEET</h4></li>
                        <li className={classes.li}>Join for Fleet</li>
                        <li><h4>SUPPORT</h4></li>
                        <li className={classes.li}>Customer Help</li>
                        <li className={classes.li}>Fleet Help</li>
                        <li className={classes.li}>Merchant Help</li>
                    </ul>
                    <ul style={{ listStyle: 'none' }}>
                        <li><h4>MORE</h4></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Delivery Near Me</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Takeout Near Me</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Pizza Near Me</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Thai Near Me</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Mexcian Near Me</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Alcohol Delivery</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">FoodFight!</a></li>
                    </ul>
                    <ul style={{ listStyle: 'none' }}>
                        <li><h4>FOLLOW US</h4></li>
                        <li className={classes.li}>
                         <a  className={classes.a} href="www.facebook.com">Twitter</a></li>
                        <li className={classes.li}>
                        <a  className={classes.a} href="www.facebook.com">Facebook</a></li>
                        <li className={classes.li}><a className={classes.a} href="www.facebook.com">Instagram</a></li>
                        <li className={classes.li}>
                        <a className={classes.a} href="www.facebook.com">Snapchat</a> </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Home;