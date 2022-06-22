import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link, useLocation} from "react-router-dom"

const NavBar = () => {
  const routerLocation = useLocation();
  const currentTab = routerLocation.pathname === "/Favorites" ? 1 : 0 

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={currentTab}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab to="/" component={Link} label="Home" index={0} />
        <Tab to="/Favorites" component={Link} label="Favorites" index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
