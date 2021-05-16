import React from 'react';

const Button = (props) => {
  console.log("hello="+props.classname);

    return(
      <input
        type='button'
        value={props.label}
        onClick={props.handleClick}
        className={props.className===undefined ? 'regular' : props.className}
       />
    )
}

export default Button;
