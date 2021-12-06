import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { toolActions } from "../../store/toolSlice";
import { useDispatch } from "react-redux";

import { FaHamburger as HamburgerIcon } from "react-icons/fa";
// import { FaBars as HamburgerIcon } from "react-icons/fa";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toolActions.selectTool({ toolName: "about" }));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="" onClick={handleClick}>
          <ListItemIcon>{/* <MailIcon /> */}</ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>

      <Divider />
    </Box>
  );

  const anchor = "right";
  return (
    <div>
      {
        <>
          <Button onClick={toggleDrawer("right", true)}>
            {""}
            <HamburgerIcon size={25} />{" "}
          </Button>
          <Drawer
            anchor={"right"}
            open={state[anchor]}
            onClose={toggleDrawer("right", false)}
          >
            {list(anchor)}
          </Drawer>
        </>
      }
    </div>
  );
}
