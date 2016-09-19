import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import { pinkA200 } from 'material-ui/styles/colors';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = (props) => (
    <AppBar
        title={<span style={styles.title}>Lloyd Rotation</span>}
        onTitleTouchTap={props.handleClickHome}
        iconElementLeft={
            <IconButton onTouchTap={props.handleClickHome}>
                <img width="24px" src="https://s10.postimg.org/3thles6ll/0d35c09fc1edc33142925224e9029e10.png"/>
            </IconButton>
        }
        iconElementRight={<FlatButton label="Logout" href="../lloyd/logout" />}
    />
);

export default Header;