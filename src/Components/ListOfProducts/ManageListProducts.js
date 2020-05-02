
 import React, { useState } from 'react';
import ListOfProducts from './ListOfProducts';
 
 export default function ManageListProducts(){



    const [list,setList] = useState([]);
    return(

        <ListOfProducts setList = {setList} list = {list} ></ListOfProducts>
    )

}