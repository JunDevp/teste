
 import React from 'react';
 import producs from "../../producs";
 import { makeStyles } from '@material-ui/core/styles';
 import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
 import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme();

theme.typography.h3= {
  fontSize: '2rem',
  
};


const useStyles = makeStyles({
    teste: {
      overflow : "auto",
      border : "solid",
      height : 200,
    },

    type : {
        marginTop: 20,
        border : "groove"
    }
  });

 export default function ListOfProducts({setList,list}){


    const classes = useStyles();
    return(
            <>
                    <div className = {classes.teste}>
                         {producs.map(res =>(
                         <ThemeProvider theme={theme}>
                         <Typography className = {classes.type} variant="h3">{res.nome}</Typography>
                       </ThemeProvider>
                ))}
                    </div>
               
            </>
    )
}