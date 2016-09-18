import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey50 } from 'material-ui/styles/colors';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const RightMenu = (props) => (
  <IconMenu
    iconButtonElement={
        
      <IconButton><MoreVertIcon color={grey50}/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Search" />
    <MenuItem primaryText="Logout" href="../lloyd/logout"/>
  </IconMenu>
)

const Header = (props) => (
    <AppBar
        title={<span style={styles.title}>Lloyd Rotation</span>}
        onTitleTouchTap={props.handleClickHome}
        iconElementLeft={
            <IconButton onTouchTap={props.handleClickHome}>
                <img width="24px" src="https://s10.postimg.org/3thles6ll/0d35c09fc1edc33142925224e9029e10.png"/>
            </IconButton>
        }
        iconElementRight={<RightMenu />}
    />
);

export default Header;