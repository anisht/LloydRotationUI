import React from 'react';
import Divider from 'material-ui/Divider';

import FroshCard from './FroshCard';
import FroshGridContainer from '../containers/FroshGridContainer';

const styles = {
    title: {
        margin: "10px 50px 10px 50px",
    },
}

const Home = (props) => (
    <div>
        <div style={styles.title}>
            <h2> The Prefrosh </h2>
            <Divider/>
        </div>
        <FroshGridContainer />
    </div>
);

export default Home;