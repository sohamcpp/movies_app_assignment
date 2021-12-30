import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation(){
const classes=useStyles();
const [value,setValue] = React.useState(0);
const history = useHistory();

useEffect(() => {
  if (value === 0) {
    history.push("/");
  } else if (value === 1) {
    history.push("/popular");
  } else if (value === 2) {
    history.push("/toprated");
  } else if (value === 3) {
    history.push("/upcoming");
  }
}, [value, history]);

return(
<BottomNavigation
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
  className={classes.root}
>
  <BottomNavigationAction label="Latest" icon={<WhatshotIcon />} />
  <BottomNavigationAction label="Popular" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Top Rated" icon={<TrendingUpIcon />} />
  <BottomNavigationAction label="Upcoming" icon={<UpcomingIcon />} />
</BottomNavigation>
);
}