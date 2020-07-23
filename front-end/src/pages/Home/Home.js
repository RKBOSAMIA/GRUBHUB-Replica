import React from "react";
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";

const mapStateToProps = ({ session }) => ({
    session
  });

const Home = ({session}) =>{
    let history = useHistory();
    const handleAvatar=(e)=>{
        e.preventDefault();
        history.push('/buyerProfile');
      };
        return(
            <div>
                <AppBar position='fixed' style={{backgroundColor:'white'}}>
                    <ToolBar>
                        <div style={{marginTop:'8px',marginLeft:'10px'}} id='toolbar'>GRUBHUB</div>
                        <div style={{marginTop:'8px',marginLeft:'1150px',cursor:'pointer',color:'black',fontFamily:'Tahoma'}} onClick={handleAvatar}>
                            <table>
                                <tr>
                                    <td>
                                        <Avatar/>
                                    </td>
                                    <td>
                                        {session.name}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </ToolBar>
                </AppBar>
                
        </div>
        )
    };

export default connect(
    mapStateToProps,
    null
)(Home);