import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

const SignedOut = () => {

    return (
    <div>
        <MenuItem><NavLink to ="/signup">Sign Up</NavLink></MenuItem>
        <MenuItem><NavLink to="/signin">Login</NavLink></MenuItem>
        <MenuItem><NavLink to ="/about">About Us</NavLink></MenuItem>
        <MenuItem><NavLink to ="/">Home</NavLink></MenuItem>
    </div>
   
      
        
    )
}
export default SignedOut;