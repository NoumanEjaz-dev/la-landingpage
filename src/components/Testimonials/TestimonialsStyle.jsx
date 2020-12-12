import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Container: {
    backgroundImage: `url("./assests/back.png")`,
    backgroundRepeat: 'no-repeat',
    minHeight: '1100px', 
    objectFit: 'contain',
    backgroundSize: 'calc(100% + 40px) auto',
    backgroundPosition: 'center top',
    marginTop: '10rem',
    '@media (min-width: 1690px)': {
      backgroundSize: '100% 100%',
    },
    '@media (max-width: 800px)': {
      minHeight: '0',
      backgroundPosition: 'center 170px',
      backgroundSize: '100% auto',
    },
    '@media (max-width: 446px)': {
      backgroundPosition: 'center 230px',
      backgroundSize: '100% auto',
    },
    '@media (max-width: 959px)': {
      marginTop: 0,
    },
    '& .ContentContainer': {
      maxWidth: '1596px',
      '& .TestimonialsContainer': {
         padding: '0px',
         '@media (max-width: 1024px)': {
           padding: 10,
         },
         '& h1': {
           fontSize: 50,
           fontFamily: 'Source Sans Pro, sans-serif',
           fontWeight: 600,
           fontStretch: 'normal',
           fontStyle: 'normal',
           lineHeight: 'normal',
           letterSpacing: 0.83,
           color: '#250f8a',
           paddingLeft: '9rem',
           '& span': {
             display: 'block',
           },
          '@media (max-width: 630px)': {
            fontSize: 40,
          },
          '@media (max-width: 580px)': {
            fontSize: 30,
          },
           '@media (max-width: 421px)': {
            fontSize: 30,
            paddingLeft: '4rem',
          },
        },
       '& .TestimonialsGrid': {
           paddingTop: '6rem',
           '@media (max-width: 1351px)': {
             paddingTop: 0,
           },
          '& .innerContent': {
            backgroundImage: 'linear-gradient(180deg, #250f8a, #234eaf)',
            borderRadius: 15,
            background: 'white',
            objectFit: 'contain',
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'center', 
            padding: '0px 10px 0px 10px',
            '@media (max-width: 630px)': {
              margin: '0px 33px', 
            },
            '& img': {
              position: 'relative',
              top: -50,
            },
            '& h2': {
              fontSize: 25,
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 600,
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 0.42,
              color: '#ffffff',
              margin: 0,
            },
            '& h3': {
              fontSize: 15,
              fontFamily: 'Source Sans Pro, sans-serif',
              fontWeight: 400,
              fontStretch: 'normal',
              fontStyle: 'normal',
              lineHeight: 'normal',
              letterSpacing: 0.25,
              color: '#ffffff',
              margin: '8px 0px 12px 0px',
            },
            '& p': {
                fontSize: 13,
                fontFamily: 'Source Sans Pro, sans-serif',
                fontWeight: 400,
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: 0.22,
                textAlign: 'center',
                color: '#ffffff',
                textAlign: 'center',
                marginBottom: 25,  
            },
          }, 
          '& .blocks': {
            cursor: 'pointer',
            '& .slick-list': {
              '@media (max-width: 750px)': {
                margin: '0 -25px',
              },
            },
            '& .slick-track': {
              display: 'flex',
              width: "0 !important",
            },
            '& .slick-track .slick-slide': {
              height: 'auto',
              display: 'flex',
              padding: '50px 15px 0',
              '@media (max-width: 750px)': {
                paddingLeft: '5px',
                paddingRight: '5px',
              },
            },
            '& .slick-track .slick-slide .block': {
              height: '100%',
              width: '250px',
              outline: 'none',
              '& .innerContent': {
                height: '100%',
              }
            },
          },
       },
      },
    },
  },
}));

export default useStyles