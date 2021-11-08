import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PeopleIcon from "@material-ui/icons/People";
import {
  AccountBoxOutlined,
  AddCircleRounded,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { Fragment, useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import Dashboard from "../../features/Dashboard";

export interface AdminLayoutProps {}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: "none",
    listStyleType: "none",
  },
  activeNavLinK: {
    backgroundColor: theme.palette.grey[300],
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const AdminLayout = (props: AdminLayoutProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [openList, setOpenList] = useState(true);
  const handleListClick = () => {
    setOpenList((state) => !state);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogoutClick = () => {
    // dispatch(createAction(actionTypes.LOGOUT_USER));
    // history.push("/");
    // window.location.reload();
  };
  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.title}>
              ADMIN
            </Typography>
            <Typography>Tai Khoan</Typography>
            <IconButton>
              <AccountCircle />
            </IconButton>
            <IconButton>
              <ExitToAppIcon color="secondary" onClick={handleLogoutClick} />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography variant="h5" color="primary">
              Control
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={handleListClick}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="User Control" />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to="/admin/user" className={classes.navLink}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AccountBoxOutlined />
                    </ListItemIcon>
                    <ListItemText primary="User List" />
                  </ListItem>
                </NavLink>
              </List>
              <List component="div" disablePadding>
                <NavLink to="/admin/user/add" className={classes.navLink}>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AddCircleRounded />
                    </ListItemIcon>
                    <ListItemText primary="Adding User" />
                  </ListItem>
                </NavLink>
              </List>
            </Collapse>
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Dashboard />
        </main>
      </div>
    </Fragment>
  );
};

export default AdminLayout;
