import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
//Icons
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { Badge, ButtonGroup, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Routes, Route, useNavigate } from "react-router-dom";
import ShopIcon from "@mui/icons-material/Shop";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "./Services/Reducers/Index";
import ChampionGridList from "./components/championGrid/ChampionGridList";
import SimpleModal from "./shared/Modal/modal";
import ChampionWatchList from "./components/championGrid/ChampionWatchList";
import RouteNav from "./Routing/RouteNav";

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function App() {
  const watchList = useSelector((store: RootState) => store.watchListChampions);
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const RedirectWatchListPage = () => {
    navigate("/watchlistPage");
  };
  //Header Menu Toggle
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = ($event: any) => {
    setAnchorEl($event.currentTarget);
  };

  const handleClose = () => {
    navigate("/");
    setAnchorEl(null);
  };
  //Header Menu Toggle Ends
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <h4>Champions</h4> 
          &nbsp;
            <span className="logo">
              <img src='./trophy.png' alt='Champions'/>
            </span>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
              className="ms-1"
            >
              <ChevronRightRoundedIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              &nbsp;
            </Typography>
            <div>
              <Badge
                color="secondary"
                badgeContent={Object.keys(watchList).length}
                onClick={RedirectWatchListPage}
              >
                <AccessAlarmIcon />
              </Badge>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <LogoutRoundedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Log out</ListItemText>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <img src='./medal2.png' alt='champions' />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className="mt-3">
            <ListItem button onClick={() => navigate("/ChampionGridList")}>
              <ListItemIcon>
                <FormatListBulletedRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Champions List" />
            </ListItem>

            <ListItem button onClick={() => navigate("/watchlistPage")}>
              <ListItemIcon>
                <AccessAlarmIcon />
              </ListItemIcon>
              <ListItemText primary="Watch List" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, py: 3, px: 2 }}>
          <DrawerHeader />
          <RouteNav/>
        </Box>
      </Box>
    </>
  );
}
