import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Label from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import { RemoveRedEye } from '@material-ui/icons';
import { InputAdornment} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import axios from 'axios';

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
    const _id = session._id;
    const [name,setName] = useState(session.name);
    const [email,setEmail] = useState(session.email);
    const [password,setPassword] = useState(session.pwd)
    const handleUpdate = (event)=>{
        event.preventDefault();
        const data={
            _id,
            name,
            email,
            password
        };
        axios
            .post('http://localhost:5000/buyerProfile',data)
            .then(resp=>{
                document.getElementById('message').innerHTML = resp.data;
                session.name = name;
                session.email = email;
            })
            .catch(err=>{alert(err)});
    };
    const toggleVisibility = (event) => {
        event.preventDefault();
        var pwd = document.getElementById('password');
        if (pwd.type === 'password'){
            pwd.type = 'text';
        }
        else{
            pwd.type = 'password';
        }
    };
    return(
        <div style={{paddingTop:'100px'}}>
            <center><h1 style={{fontFamily:'Tahoma'}}>Account Profile</h1></center>
            <center><Avatar className={classes.ProfilePicture} alt="Set" src={require("../../../src/images/rushi.jpg")}/></center>
            <Container component="main" maxWidth="xs" style={{backgroundColor:'inherit'}}>
            <div id='message' style={{color:'green',fontSize:'12px'}}></div>
            <CssBaseline />
                <form noValidate>
                    <Label className={classes.Typography_Header}>Name</Label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id={name}
                        value = {name}
                        color="secondary"
                        name="name"
                        autoComplete="name"
                        onChange={ (e)=>{
                            setName(e.target.value)
                        }}
                    />
                    <Label className={classes.Typography_Header}>Email</Label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id={email}
                        color="secondary"
                        value= {email}
                        name="email"
                        autoComplete="email"
                        onChange={e=>setEmail(e.target.value)}
                    />
                    <Label className={classes.Typography_Header}>Password</Label>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        color="secondary"
                        value= {password}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e=>setPassword(e.target.value)}
                        disabled
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <RemoveRedEye onClick={toggleVisibility} style={{'cursor':'pointer'}}/>
                              </InputAdornment>
                            ),
                          }}
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