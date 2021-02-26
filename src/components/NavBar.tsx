import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const navigationRouteMapper = {
  Hem: "/",
  Kundvagn: "/cart",
};

const NavBar = () => {
  const history = useHistory();
  return (
    <div>
      <List>
        {["Hem", "Kundvagn"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              history.push(navigationRouteMapper[text]);
            }}
          >
            <ListItemIcon>
              {index % 4 === 0 ? <HomeIcon /> : <ShoppingCartIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default NavBar;
