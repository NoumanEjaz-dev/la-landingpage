import palette from "./palette";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	fontFamily: "\"verdana\", sans-serif",
	// fontSize: 16,
	fontStyle: "normal",
	fontWeight: "normal",
	// lineHeight: '22px',
	color: palette.text.primary,

	h1: {
		display: "flex",
		justifyContent: "center",
		color: palette.text.primary,
		fontFamily: "Chaloops W00 Reg",
		fontSize: "32px",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "45px",
	},
	h2: {
		color: palette.text.primary,
		fontWeight: "bold",
		fontSize: "34px",
		lineHeight: "34px",
	},
	h3: {
		color: palette.text.primary,
		fontWeight: "bold",
		fontSize: "16px",
		lineHeight: "22px",
	},
	// h4: {
	// },
	// h5: {
	// },
	// h6: {
	// },
	// subtitle1: {
	// },
	// subtitle2: {
	// },
	body1: {
		color: palette.text.primary,
		fontSize: "16px",
		lineHeight: "22px",
		fontWeight: "normal",
		// backgrongColor:'#c8d0de',
       
	},
   
	// body2: {
	// },
	button: {
		color: palette.text.primary,
		fontSize: "15px",
		lineHeight: "20px",
		fontWeight: "bold",
        
	},
    
	//  MuiListItemIconRoot: {
	//      color:'red',
	//  }
	// caption: {
	// },
	// overline: {
	// }
}; 
   