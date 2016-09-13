import React from 'react';
import FroshCard from './FroshCard';
import FroshGridContainer from '../containers/FroshGridContainer';
import Divider from 'material-ui/Divider';

const styles = {
    title: {
        margin: "10px 50px 10px 50px",
    },
}

const Home = () => (
    <div>
        <div style={styles.title}>
            <h2> The Prefrosh </h2>
            <Divider/>
        </div>
        <FroshGridContainer />
    </div>
);

export default Home;