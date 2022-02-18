import React from "react";
import './Button.css'

export default props => 
        <button 
        onClick={e=> props.click && props.click(props.label)}
        
        className={`
          button
          ${props.operetion ? 'operation' : ''}
          ${props.double? 'double' : ''}
          ${props.tre ? 'tre' : ''}

        `}>
                {props.label}
        </button>