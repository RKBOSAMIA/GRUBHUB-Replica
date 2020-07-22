import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../../App.css'
import { Menu } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        paddingTop:350,
        paddingLeft:620
    }
})
export default function LandingPage(){
    const classes = useStyles();
    const [user,setUser] = useState('');
    let userType = ''
    const handleChange = (event) =>{
        setUser(event.target.value);
        userType = event.target.value;
        if(userType==='Owner')
            window.location = '/ownerSignIn';
        else if(userType==='Buyer')
            window.location = '/buyerSignIn';
    };
  
    return(
        <div id='bgImg'>
            <FormControl className={classes.root}>
                <InputLabel id="user-type" >User</InputLabel> 
                <Grid container spacing={2}>
                    <Grid item>
                        <Select id='user' labelId='user-type' onChange={handleChange} value={user} displayEmpty style={{backgroundColor:'white',minWidth:'160px'}}>
                            <MenuItem value='' disabled><Typography>select user type</Typography></MenuItem>
                            <MenuItem value='Owner'>Owner</MenuItem>
                            <MenuItem value='Buyer'>Buyer</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </FormControl>
        </div>
    );
};