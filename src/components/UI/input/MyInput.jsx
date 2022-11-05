import react from 'react';
import React from 'react';
import classes from './MyInput.module.css';


const MyInput = react.forwardRef((props,ref)  => {
  return (
    <input ref={ref} className={classes.myInpt} {...props}/>
  );
});

export default MyInput;