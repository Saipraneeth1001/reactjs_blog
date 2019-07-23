import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../Components/Store/actions/authActions'
import MenuItem from '@material-ui/core/MenuItem';
const SignedIn = (props) => {
    
    return (
    <div>
        <MenuItem><NavLink to ="/create">Create Project</NavLink></MenuItem>
        <MenuItem><a onClick = {props.signOut}>Logout</a></MenuItem>
        <MenuItem><NavLink to ="/about">About Us</NavLink></MenuItem>
        <MenuItem><NavLink to ="/">Home</NavLink></MenuItem>
    </div>
   
        
    )
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedIn);