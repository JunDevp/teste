import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    text: {
     textAlign : "center",
     alignItems : "center",
     borderColor: 'green',
     fontFamily :'Raleway',
     fontWeight: 400,
      
    },
  });
  
function LoginForm({changePassword}) {

    const classes = useStyles();
    
  return (

    <TextField id="standard-basic" label="Password" type = "password" className = {classes.text} onChange = {changePassword}/>
  );
}

export default LoginForm;
