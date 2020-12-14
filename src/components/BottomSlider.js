import React, { useRef, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Img1 from '../assest/icons/avatar.png';

const useStyles = makeStyles((theme) => ({
    image: {
        height: '2rem',
        maxWidth: 'none',
        objectFit: 'cover',
        marginLeft: '1rem',
        marginRight: '1rem',
    },
    ImageContainerRight: {
        // animation: 'marquee 2s linear infinite',
        whiteSpace: 'nowrap',
        transform: 'translateX(100%)',
        animation: '$floatText 35s infinite linear',
        // paddingLeft: '100vw',
    },
    '@keyframes floatText': {
        to: { transform: 'translateX(-100%)' },
    },
    ImageContainerLeft: {
        // animation: 'marquee 2s linear infinite',
        whiteSpace: 'nowrap',
        transform: 'translateX(-100%)',
        animation: '$floatText1 35s infinite linear',
        // paddingRight: '100vw' /*Initial offset*/,
    },
    '@keyframes floatText1': {
        to: { transform: 'translateX(100%)' },
    },
    OneflareSlider: {

        width: '260px',
        height: '182px',
        padding: '16px',
        border: '1px solid rgb(238, 238, 238)',
        borderRadius: '4px',
        margin: "10px 8px 11px 10px",
        position: 'relative',
        transition: 'top 0.2s ease-in 0s',
        top: '0px',
        "&:hover": {
            transform: 'translateY(-12px)',
            boxShadow: '0 0 4px rgba(14,15,20,0.1)',
            transition: '0.4s'

        },
    },
    h3: {
        margin: '0px',
        lineHeight: '1.5',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        fontFamily: 'montserratbold, Helvetica, Arial',
        textTransform: 'uppercase',
        color: 'rgb(167, 169, 172)',
        fontSize: '11px',
        padding: '0px 0px 8px',

    },
    cart: {
        position: 'relative',
        padding: '0px 0px 8px',
    },
    Avatar: {
        position: "absolute",
        top: '3px',
        left: '0px',
        padding: '0px 0px 8px',
    },
    h4: {
        lineHeight: 1.5,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: ' 0px 0px 0px 56px',
        margin: '0px',
        fontFamily: 'lato, Helvetica Neue, Arial, sans-serif',
        color: 'rgb(38, 49, 51)',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    heading: {
        lineHeight: 1.5,
        textOverflow: 'ellipsis',
        Overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '0px 0px 0px 56px',
        margin: '0px',
        color: 'rgb(128, 130, 133)',
        fontSize: '14px',
    },
    para: {
        color: ' rgb(88, 89, 91)',
        fontSize: '16px',
        lineHeight: 1.5,
        height: '45px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: ' vertical',
        overflow: ' hidden',
        margin: '0px 0px 8px',
    },
    postDate: {
        color: 'rgb(128, 130, 133)',
        fontSize: ' 13px',
        lineHeight: '1.5',
    },
    detail: {
        margin: '25px 0px 45px 0px',
        textAlign: 'center',
    },
}));




const BottomSlider = () => {
    const classes = useStyles();
    const inputRef = useRef();
    // const inputRef2 = useRef();

    // const [text, setText] = React.useState(1);

    setInterval(() => {
        if (
            inputRef &&
            inputRef.current &&
            inputRef.current.innerText === 'enter a new market'
        ) {
            inputRef.current.innerText = 'launch a new product';
        } else if (
            inputRef &&
            inputRef.current &&
            inputRef.current.innerText === 'launch a new product'
        ) {
            inputRef.current.innerText = 'increase your international presence';
        } else if (
            inputRef &&
            inputRef.current &&
            inputRef.current.innerText === 'increase your international presence'
        ) {
            inputRef.current.innerText = 'enter a new market';
        }
    }, 1000);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className={classes.detail}>
                <span className={classes.h2heading}><h2>let see whats new </h2></span>
            </div>


            <Box mb={5}>
                <Box overflow="hidden">
                    <Box
                        display="flex"
                        justifyContent="space-around"
                        flexDirection="row"
                        flexWrap="noWrap"
                        className={classes.ImageContainerRight}
                        pb={0}
                    >
                        <>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                        </>
                    </Box>
                </Box>


                <Box overflow="hidden">
                    <Box
                        display="flex"
                        justifyContent="space-around"
                        flexDirection="row"
                        flexWrap="noWrap"
                        className={classes.ImageContainerLeft}
                        pb={3}
                    >
                        <>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" src={Img1} className={classes.image} alt="img1"></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image}></img>
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                            <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image} />
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                               <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image} />
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                               <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image} />
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                               <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image} />
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                               <div className={classes.OneflareSlider}>
                                <h3 className={classes.h3}>
                                    pet Grooming
                        </h3>
                                <div className={classes.cart}>
                                    <div className={classes.Avatar} kind="circle">
                                        <img width="30px" alt="img1" src={Img1} className={classes.image} />
                                    </div>
                                    <h4 className={classes.h4}>Nomi</h4>
                                    <div className={classes.heading}>Hampstead Gardens, SA</div>
                                </div>
                                <p className={classes.para}>
                                    To dogs washed and deshedding
                        </p>
                                <div className={classes.postDate}>
                                    Posted 2 days ago
                        </div>
                            </div>
                        </>

                    </Box>
                </Box>
            </Box>
        </>
    );
};
export default BottomSlider;
