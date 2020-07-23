import Axios from 'axios';

export const SignIn = user =>(
    Axios({
        method:"POST",
        data:user,
        withCredentials:true,
        url:"http://localhost:5000/buyerSignIn",
    })
);

export const checkLoggedIn = async () => {
    const response = await fetch('http://localhost:5000/buyerSignIn');
    const { user } =  await response
    let preloadedState = {};
    if (user) {
      preloadedState = {
        session: user
      };
    }
    return preloadedState;
  };
