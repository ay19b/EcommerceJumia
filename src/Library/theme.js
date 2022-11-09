import {ThemeProvider,responsiveFontSizes,createTheme} from '@material-ui/core';



export const theme = createTheme({
   breakpoints:{
     values:{
       xs:0,
       sm:400,
       md:900,
     }
   },
    palette: {
        primary: {
          main: "#f68b1e",
          blue:'#17A8D6',
        },
        secondary: {
          main: '#fff',
        },
      },
      typography:{
        h6:{
          fontWeight:'bold'
        },
        subtitle1:{
          fontWeight:'600',
        }
      },
      overrides:{
        MuiFormControl:{
          root:{
           backgroundColor:'white !important'
          }
        },
        MuiBadge:{
          colorPrimary:{
            color:'white !important',
            fontWeight:'700',
        }},
        MuiBackdrop:{
          root:{
            backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
          }
        },
        MuiSnackbar:{
          anchorOriginTopCenter:{
            top: '0 !important',
            right: 'auto',
            transform: 'none',
            width:'100% !important',
          }
        },
        MuiSnackbarContent:{
          root:{
            backgroundColor: 'rgb(9, 147, 24) !important',
            minWidth: '100% !important',
            justifyContent: 'center',
          }
        },
        
        MuiInputBase:{
          root:{
            backgroundColor: 'white !important',
          }
        },
      }
});   


theme.overrides.MuiFormControl.root = {
  [theme.breakpoints.up("md")]: {
    width:"50%",
  },
  [theme.breakpoints.down("sm")]: {
    width:"100%",
  },
  
};

theme.typography.h3 = {
  
  [theme.breakpoints.up("xs")]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '2.5707rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '2.7849rem',
  },
  
};
theme.typography.h4 = {
  
  [theme.breakpoints.up("xs")]: {
    fontSize: '1.5625rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '1.8219rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '2.0243rem',
  },
  
};

theme.typography.h5 = {
  
  [theme.breakpoints.up("xs")]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '1.3118rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '1.4993rem',
  },
  
};

theme.typography.h6 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: '1.05rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '1.0938rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '1.0938rem',
  },
  
};
theme.typography.subtitle1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: '0.88rem',
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: '0.95rem',
  },
  [theme.breakpoints.up("md")]: {
    fontSize: '1rem',
  },
  
};



