import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import FroshGrid from '../components/FroshGrid';
import apiClient from '../utils/apiClient';

const styles = {
    a: {
        width: "100%",
        height: "70vh",
        textAlign: "center",
    },
    center: {
        marginTop: "10vh",
    },
}

const FroshGridContainer = React.createClass({
    getInitialState: function() {
        return {
            froshList: [],
            loading: true,
        };
    },
    componentDidMount: function() {
        this.requestFroshList();
    },
    requestFroshList: function() {
        this.setState({
            froshList: apiClient.getFroshList(),
            loading: true,
        });
    },
    render() {
        return (
            this.state.loading === true
            ?
            <FroshGrid froshList={this.state.froshList}/>
            :
            <div style={styles.a}>
                <CircularProgress style={styles.center} size={140}/>
            </div>
        );
    }
});

export default FroshGridContainer;