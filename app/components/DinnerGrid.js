import React from 'react';
import Divider from 'material-ui/Divider';

import FroshCard from './FroshCard';
import DinnerGridContainer from '../containers/DinnerGridContainer';

const styles = {
    title: {
        margin: "10px 50px 10px 50px",
    },
}

const DinnerGrid = (props) => (
    <div>
        <div style={styles.title}>
            <h2> Dinner </h2>
            <Divider/>
        </div>
        <DinnerGridContainer />
    </div>
);

export default DinnerGrid;