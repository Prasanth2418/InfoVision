import React from "react";
import "./Help.css";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import help from "../../Assets/help.png";


const Help = () => {
    return(
        <div className="container">
        <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="help col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <center>
        <h2>Help</h2>
        <img src={help} alt="image" className="row" />
        
        </center>
        <h6>Connect us through</h6>
        <List>
            <ListItem>
            <ListItemAvatar>
            <Avatar>
            <CallIcon />
            </Avatar>
            </ListItemAvatar>
                <ListItemText primary="Phone Number" secondary='456879713' />
            </ListItem>
            <ListItem>
            <ListItemAvatar>
            <Avatar>
            <MailIcon />
            </Avatar>
            </ListItemAvatar>
                <ListItemText primary="Email" secondary='abc@gmail.com' />
            </ListItem>
            <ListItem>
            <ListItemAvatar>
            <Avatar>
            <ChatIcon />
            </Avatar>
            </ListItemAvatar>
                <ListItemText primary="Chat" secondary='Live chat with us' />
            </ListItem>
        </List>
       
        </div>
        </div>
        </div>
    );
};

export default Help;