import React, {useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import {navigation} from "../../navigation";
import {Link as RouterLink, useHistory, useLocation} from "react-router-dom";

const Navbar = () => {

    const {pathname = ""} = useLocation();

    return (
        <List>
            <div>
                {
                    navigation.map((e, i) => {
                        return (
                            <ListItem button selected={pathname === e.path} key={"nav-"+i}>
                                <RouterLink to={e.path} className={"navbar-list-item"}/>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary={e.text}/>
                            </ListItem>
                        )
                    })
                }
            </div>
        </List>
    );
};

export default Navbar;