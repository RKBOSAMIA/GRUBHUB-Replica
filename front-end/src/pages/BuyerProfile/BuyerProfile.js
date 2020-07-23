import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Label from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {image} from '../../../src/images/rushi.jpg'
import { connect } from 'react-redux';

const ProfileImageProps ={
        borderColor: 'gray',
        border:2,
        style:{width:'16rem',height:'16rem'},
        borderRadius:'50%',
        m:1
    };

const useStyles = makeStyles({
    Typography_Header:{
        fontFamily: 'Tahoma',
        color:'black'
    },
    ProfilePicture:{
        height:'10rem',width:'10rem'
    }
})

const mapStateToProps= ({session}) => ({
    session
  });

const BuyerProfile = ({session}) => {
    const classes = useStyles();
    const handleUpdate = (event)=>{
        
    };
    return(
        <div style={{paddingTop:'100px'}}>
            <center><h1 style={{fontFamily:'Tahoma'}}>Account Profile</h1></center>
            <center><Avatar className={classes.ProfilePicture} alt="Set" src={require("../../../src/images/rushi.jpg")}/></center>
            <Container component="main" maxWidth="xs" style={{backgroundColor:'inherit'}}>
            <CssBaseline />
                <form noValidate>
                    <Label className={classes.Typography_Header}>Name</Label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        value = {session.name}
                        color="secondary"
                        name="name"
                        autoComplete="name"
                    />
                    <Label className={classes.Typography_Header}>Email</Label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        color="secondary"
                        value= {session.email}
                        name="email"
                        autoComplete="email"
                    />
                    <Label className={classes.Typography_Header}>Password</Label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        color="secondary"
                        value= {session.pwd}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button variant="contained" color="secondary" fullWidth type="Submit" onClick={handleUpdate}>
                        Update
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default connect(
    mapStateToProps,
    null
)(BuyerProfile);