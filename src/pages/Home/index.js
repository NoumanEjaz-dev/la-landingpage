import React from 'react'
import Navigation from '../../components/Navigation';
// import ImageSlider from '../../components/ImageSlider'
import ImgSlider from '../../components/ImgSlider'
import { makeStyles } from '@material-ui/core/styles';
import bgImg from '../../assest/images/example.png';
import Product from '../../components/Products';
import ProductDetails from '../../components/ProductdDetails';
import BottomSlider from '../../components/BottomSlider';
import Footer from '../../components/Footer';
import Slider from '../../components/slider'

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `url(${bgImg})`,
    height: '700px',
  }
}));


const Home = () => {
  const classes = useStyles()
  return (
    <>

      <div className={classes.main}>
        <Navigation />
      </div>
      <ImgSlider />
      {/* <Slider/> */}
      <Product />
      <ProductDetails />
      <BottomSlider />
     
      <Footer/>
    </>
  )
}

export default Home;