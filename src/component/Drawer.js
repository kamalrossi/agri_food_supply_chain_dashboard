import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/farmer" className={classes.link}>Farmer</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/customer" className={classes.link}>Customer</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/shipment" className={classes.link}>Shipment</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
           <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/routeplanner" className={classes.link}>Routeplanner</Link>
            </ListItemText>
          </ListItem>
          <Divider/>

        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/order" className={classes.link}>Order</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
