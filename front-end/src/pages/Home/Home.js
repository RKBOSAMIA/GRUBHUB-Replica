import React from "react";
import { connect } from 'react-redux';

const mapStateToProps= ({session}) => ({
    session
});

const Home = ({session}) =>{
        return(
            <div style={{marginTop:'100px'}}>WELCOME {session.name}</div>
        )
    };

export default connect(
    mapStateToProps,
    null
)(Home);