import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import FroshGrid from '../components/FroshGrid';
import apiClient from '../utils/apiClient';

const styles = {
    loading: {
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
        }
    },
    componentDidMount: function() {
        this.requestFroshList();
    },
    requestFroshList: function() {
        apiClient.getFroshList()
            .then(function (froshList) {
                this.setState({
                    froshList: froshList,
                    loading: false,
                });
            }.bind(this));
    },
    render: function() {
        return (
            this.state.loading
            ?
                <div style={styles.loading}>
                    <CircularProgress style={styles.center} size={140}/>
                </div>
            :
                <FroshGrid froshList={this.state.froshList}/>
        );
    }
});

export default FroshGridContainer;