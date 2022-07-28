import React, { Fragment } from 'react'

const Footer =(props) =>{
    return(
        
        <footer>
        <p>TODOS LOS DERECHOS RESERVADOS &copy; {props.fecha}</p>
        </footer>
    ) 
}

export default Footer