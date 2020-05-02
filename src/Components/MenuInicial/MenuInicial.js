
 import React from 'react';
 import InputBase from '@material-ui/core/InputBase';
 import Grid from '@material-ui/core/Grid';
import ListOfProducts from '../ListOfProducts/ListOfProducts';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
   
  

  }));


  export default function MenuInicial(){

    const classes = useStyles();
 
     return(

                        <div>
                            <Grid  container  >
                                <Grid xs = {8}>
                                     
                                </Grid>
                                <Grid xs = {4}>
                                      <InputBase
                                           placeholder="Pesquisar "
                                      />
                                </Grid>

                                <Grid xs = {4}>
                                    <div className = {classes.teste}>
                                    <ListOfProducts></ListOfProducts>

                                    </div>
                                 </Grid>

                                 <Grid xs = {8}>
                                    <div className = {classes.teste}>
                                    <ListOfProducts></ListOfProducts>

                                    </div>
                                 </Grid>


                            </Grid>
                        </div>
     )
 
 }