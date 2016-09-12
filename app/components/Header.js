import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const Header = () => (
    <AppBar
      title="Lloyd Rotation"
      iconElementRight={<FlatButton label="Logout" />}
    />
);

export default Header;