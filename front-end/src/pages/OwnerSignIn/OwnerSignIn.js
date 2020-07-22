import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../../App.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function OwnerSignIn() {

        const classes = useStyles();
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");

        const handleSubmit =(e) =>{
            e.preventDefault();
            const data={
                email,password
            };
            axios
                .post('http://localhost:5000/ownerSignIn',data)
                .then(
                        res=>{
                            if(res.data.status === 'unmatched'){
                                document.getElementById('error_message').innerHTML = res.data.message;
                            }
                            else if(res.data.status === 'no'){
                                document.getElementById('error_message').innerHTML = res.data.message;
                            }
                            else if(res.data.status === 'yes'){
                                window.location = '/home';
                            }
                        }
                    )
                .catch(err=>{alert(err)});
        }
        return (
            <div id='bgImg' style={{paddingTop:'100px'}}>
            <Container component="main" maxWidth="xs" style={{backgroundColor:'white'}}>
                <CssBaseline />
                <div className={classes.paper} >
                    <Typography component="h4" variant="h6">
                    <p>SIGN IN WITH YOUR GRUBHUB ACCOUNT</p>
                    <div id='error_message' style={{color:'red',fontSize:'12px'}}></div>
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            color="secondary"
                            name="email"
                            value={email}
                            autoComplete="email"
                            onChange={e=>{setEmail(e.target.value)}}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={password}
                            color="secondary"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e=>{setPassword(e.target.value)}}
                        />
                        <Grid container>
                            <Grid item xs>
                                <FormControlLabel
                                control={<Checkbox value="remember" color="secondary" />}
                                label="Keep me signed in"/>
                            </Grid>
                        </Grid>
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Expand Business
                        </Button>

                        <center>or</center>
                        
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Continue with google
                        </Button>
                        <Link href="/ownerSignUp" variant="body2" color="secondary">
                            <center><p>Create a new account</p></center>
                        </Link>

                    </form>
                </div>
            </Container>
        </div>
        );
};