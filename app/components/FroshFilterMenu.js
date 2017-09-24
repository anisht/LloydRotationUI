import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';


// Todo: Generate MenuItems dynamically using API call!
const FroshFilterMenu = (props) => (
    <DropDownMenu
        value={props.value}
        onChange={props.handleChange}
        maxHeight={300}
    >
        <MenuItem value={0} primaryText="None" />
        <Divider />
        <MenuItem value={1} primaryText="Dinner 9/20" />
        <MenuItem value={2} primaryText="Dinner 9/21" />
        <MenuItem value={3} primaryText="Dinner 9/22" />
        <MenuItem value={4} primaryText="Lunch 9/23" />
        <MenuItem value={5} primaryText="Dinner 9/23" />
        <MenuItem value={6} primaryText="Lunch 9/24" />
        <MenuItem value={7} primaryText="Dinner 9/25" />
        <MenuItem value={8} primaryText="Dinner 9/26" />
        <Divider />
        <MenuItem value={9} primaryText="Dessert 9/20" />
        <MenuItem value={10} primaryText="Dessert 9/21" />
        <MenuItem value={11} primaryText="Dessert 9/23" />
        <MenuItem value={12} primaryText="Dessert 9/24" />
        <MenuItem value={13} primaryText="Dessert 9/25" />
        <MenuItem value={14} primaryText="Dessert 9/26" />
        <MenuItem value={15} primaryText="Dessert 9/27" />
    </DropDownMenu>
);

export default FroshFilterMenu;